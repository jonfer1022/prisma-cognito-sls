import { CognitoAdapter, SNSAdapter } from "../adapters/aws-adapters";
import {
  OTPAdapter,
  UserAdapter,
  // UserStatusAdapter,
} from "../adapters/database-adapters";
import { NotFoundProblem } from "../entities/errors";
import * as crypto from "crypto-secure-random-digit";

export class LoginService {
  private userAdapter: UserAdapter;
  // private userStatusAdapter: UserStatusAdapter;
  private snsAdapter: SNSAdapter;
  private otpAdapter: OTPAdapter;
  private cognitoAdapter: CognitoAdapter;

  constructor() {
    this.userAdapter = new UserAdapter();
    // this.userStatusAdapter = new UserStatusAdapter();
    this.snsAdapter = new SNSAdapter();
    this.otpAdapter = new OTPAdapter();
    this.cognitoAdapter = new CognitoAdapter();
  }

  /**
   * signUp
   * @param {string} phone users phone
   * @param {string} password users password
   */
  public async signUp(phone: string, password: string) {
    try {
      await this.cognitoAdapter.signUpUser(phone, password);
      await this.userAdapter.createUser(phone);
    } catch (error) {
      console.log(`Error in signUp: ${error}`);
      return error;
    }
  }

  /**
   * confirmSignUp
   * @param {string} phone users phone
   * @param {string} code users password
   */
  public async confirmSignUp(phone: string, code: string) {
    try {
      const user = await this.userAdapter.getUserByPhone(phone);
      if (!user) throw new NotFoundProblem();
      await this.cognitoAdapter.confirmSignUp(phone, code);
    } catch (error) {
      console.log(`Error in confirmSignUp: ${error}`);
      return error;
    }
  }

  /**
   * signIn
   * @param {string} phone users phone
   * @param {string} password users password
   */
  public async signIn(phone: string, password: string) {
    try {
      await this.cognitoAdapter.signInUser(phone, password);
    } catch (error) {
      console.log(`Error in signIn: ${error}`);
      return error;
    }
  }

  /**
   * requestCode
   * @param {string} phone users phone
   */
  public async requestCode(phone: string) {
    try {
      const user = await this.userAdapter.getUserByPhone(phone);
      if (!user) throw new NotFoundProblem();

      const code = crypto.randomDigits(6).join("");
      await this.snsAdapter.sendOTP(user.phone, code);

      await this.otpAdapter.saveOTP(code, user.id);

      return { ok: "ok" };
    } catch (error) {
      console.log(`Error in requestCode: ${error}`);
      return error;
    }
  }

  /**
   * verifyCodeToForgotPassword
   * @param {string} phone users phone
   * @param {string} code sms code
   * @param {string} password new password
   */
  public async verifyCodeToForgotPassword(
    phone: string,
    code: string,
    password: string
  ) {
    try {
      const user = await this.userAdapter.getUserByPhone(phone);
      if (!user) throw new NotFoundProblem();

      await this.cognitoAdapter.confirmNewPassword(phone, password, code);
      await this.signIn(phone, password);

      return { ok: "ok" };
    } catch (error) {
      console.log(`Error in verifyCodeToForgotPassword: ${error}`);
      return error;
    }
  }

  /**
   * checkCode
   * @param {string} user_id users phone
   * @param {string} code sms code
   */
  public async checkCode(user_id: string, code: string) {
    try {
      const otp = await this.otpAdapter.getOTPByCode(code, user_id);
      if (!otp?.length) throw new NotFoundProblem();
      return { ok: "ok" };
    } catch (error) {
      console.log(`Error in checkCode: ${error}`);
      return error;
    }
  }

  /**
   * setPassword
   * @param {string} phone users phone
   */
  public async forgotPassword(phone: string) {
    try {
      const user = await this.userAdapter.getUserByPhone(phone);
      if (!user) throw new NotFoundProblem();

      await this.cognitoAdapter.forgotPassword(phone);
    } catch (error) {
      console.log(`Error in forgotPassword: ${error}`);
      return error;
    }
  }
}
