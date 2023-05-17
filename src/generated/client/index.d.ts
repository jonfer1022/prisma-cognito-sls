
/**
 * Client
**/

import * as runtime from './runtime/library';
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends Prisma.PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};

export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>


/**
 * Model userStatus
 * 
 */
export type userStatus = {
  id: string
  name: string
  created_at: Date
  updated_at: Date
}

/**
 * Model users
 * 
 */
export type users = {
  id: string
  phone: string
  created_at: Date
  updated_at: Date
  user_status_id: string
}

/**
 * Model otpHistory
 * 
 */
export type otpHistory = {
  id: string
  code: string | null
  created_at: Date
  updated_at: Date
  user_id: string
}


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more UserStatuses
 * const userStatuses = await prisma.userStatus.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more UserStatuses
   * const userStatuses = await prisma.userStatus.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

  /**
   * Add a middleware
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<this, "$connect" | "$disconnect" | "$on" | "$transaction" | "$use">) => Promise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<R>

      /**
   * `prisma.userStatus`: Exposes CRUD operations for the **userStatus** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserStatuses
    * const userStatuses = await prisma.userStatus.findMany()
    * ```
    */
  get userStatus(): Prisma.userStatusDelegate<GlobalReject>;

  /**
   * `prisma.users`: Exposes CRUD operations for the **users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.usersDelegate<GlobalReject>;

  /**
   * `prisma.otpHistory`: Exposes CRUD operations for the **otpHistory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OtpHistories
    * const otpHistories = await prisma.otpHistory.findMany()
    * ```
    */
  get otpHistory(): Prisma.otpHistoryDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket


  /**
   * Prisma Client JS version: 4.14.0
   * Query Engine version: d9a4c5988f480fa576d43970d5a23641aa77bc9c
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  export function validator<V>(): <S>(select: runtime.Types.Utils.LegacyExact<S, V>) => S;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    userStatus: 'userStatus',
    users: 'users',
    otpHistory: 'otpHistory'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type DefaultPrismaClient = PrismaClient
  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends RejectOnNotFound
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     * @deprecated since 4.0.0. Use `findUniqueOrThrow`/`findFirstOrThrow` methods instead.
     * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, '$connect' | '$disconnect' | '$on' | '$transaction' | '$use'>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserStatusCountOutputType
   */


  export type UserStatusCountOutputType = {
    users: number
  }

  export type UserStatusCountOutputTypeSelect = {
    users?: boolean
  }

  export type UserStatusCountOutputTypeGetPayload<S extends boolean | null | undefined | UserStatusCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? UserStatusCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (UserStatusCountOutputTypeArgs)
    ? UserStatusCountOutputType 
    : S extends { select: any } & (UserStatusCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof UserStatusCountOutputType ? UserStatusCountOutputType[P] : never
  } 
      : UserStatusCountOutputType




  // Custom InputTypes

  /**
   * UserStatusCountOutputType without action
   */
  export type UserStatusCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the UserStatusCountOutputType
     */
    select?: UserStatusCountOutputTypeSelect | null
  }



  /**
   * Count Type UsersCountOutputType
   */


  export type UsersCountOutputType = {
    otpHistory: number
  }

  export type UsersCountOutputTypeSelect = {
    otpHistory?: boolean
  }

  export type UsersCountOutputTypeGetPayload<S extends boolean | null | undefined | UsersCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? UsersCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (UsersCountOutputTypeArgs)
    ? UsersCountOutputType 
    : S extends { select: any } & (UsersCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof UsersCountOutputType ? UsersCountOutputType[P] : never
  } 
      : UsersCountOutputType




  // Custom InputTypes

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect | null
  }



  /**
   * Models
   */

  /**
   * Model userStatus
   */


  export type AggregateUserStatus = {
    _count: UserStatusCountAggregateOutputType | null
    _min: UserStatusMinAggregateOutputType | null
    _max: UserStatusMaxAggregateOutputType | null
  }

  export type UserStatusMinAggregateOutputType = {
    id: string | null
    name: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UserStatusMaxAggregateOutputType = {
    id: string | null
    name: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UserStatusCountAggregateOutputType = {
    id: number
    name: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type UserStatusMinAggregateInputType = {
    id?: true
    name?: true
    created_at?: true
    updated_at?: true
  }

  export type UserStatusMaxAggregateInputType = {
    id?: true
    name?: true
    created_at?: true
    updated_at?: true
  }

  export type UserStatusCountAggregateInputType = {
    id?: true
    name?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type UserStatusAggregateArgs = {
    /**
     * Filter which userStatus to aggregate.
     */
    where?: userStatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of userStatuses to fetch.
     */
    orderBy?: Enumerable<userStatusOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: userStatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` userStatuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` userStatuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned userStatuses
    **/
    _count?: true | UserStatusCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserStatusMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserStatusMaxAggregateInputType
  }

  export type GetUserStatusAggregateType<T extends UserStatusAggregateArgs> = {
        [P in keyof T & keyof AggregateUserStatus]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserStatus[P]>
      : GetScalarType<T[P], AggregateUserStatus[P]>
  }




  export type UserStatusGroupByArgs = {
    where?: userStatusWhereInput
    orderBy?: Enumerable<userStatusOrderByWithAggregationInput>
    by: UserStatusScalarFieldEnum[]
    having?: userStatusScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserStatusCountAggregateInputType | true
    _min?: UserStatusMinAggregateInputType
    _max?: UserStatusMaxAggregateInputType
  }


  export type UserStatusGroupByOutputType = {
    id: string
    name: string
    created_at: Date
    updated_at: Date
    _count: UserStatusCountAggregateOutputType | null
    _min: UserStatusMinAggregateOutputType | null
    _max: UserStatusMaxAggregateOutputType | null
  }

  type GetUserStatusGroupByPayload<T extends UserStatusGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<UserStatusGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserStatusGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserStatusGroupByOutputType[P]>
            : GetScalarType<T[P], UserStatusGroupByOutputType[P]>
        }
      >
    >


  export type userStatusSelect = {
    id?: boolean
    name?: boolean
    created_at?: boolean
    updated_at?: boolean
    users?: boolean | userStatus$usersArgs
    _count?: boolean | UserStatusCountOutputTypeArgs
  }


  export type userStatusInclude = {
    users?: boolean | userStatus$usersArgs
    _count?: boolean | UserStatusCountOutputTypeArgs
  }

  export type userStatusGetPayload<S extends boolean | null | undefined | userStatusArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? userStatus :
    S extends undefined ? never :
    S extends { include: any } & (userStatusArgs | userStatusFindManyArgs)
    ? userStatus  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'users' ? Array < usersGetPayload<S['include'][P]>>  :
        P extends '_count' ? UserStatusCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (userStatusArgs | userStatusFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'users' ? Array < usersGetPayload<S['select'][P]>>  :
        P extends '_count' ? UserStatusCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof userStatus ? userStatus[P] : never
  } 
      : userStatus


  type userStatusCountArgs = 
    Omit<userStatusFindManyArgs, 'select' | 'include'> & {
      select?: UserStatusCountAggregateInputType | true
    }

  export interface userStatusDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one UserStatus that matches the filter.
     * @param {userStatusFindUniqueArgs} args - Arguments to find a UserStatus
     * @example
     * // Get one UserStatus
     * const userStatus = await prisma.userStatus.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends userStatusFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, userStatusFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'userStatus'> extends True ? Prisma__userStatusClient<userStatusGetPayload<T>> : Prisma__userStatusClient<userStatusGetPayload<T> | null, null>

    /**
     * Find one UserStatus that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {userStatusFindUniqueOrThrowArgs} args - Arguments to find a UserStatus
     * @example
     * // Get one UserStatus
     * const userStatus = await prisma.userStatus.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends userStatusFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, userStatusFindUniqueOrThrowArgs>
    ): Prisma__userStatusClient<userStatusGetPayload<T>>

    /**
     * Find the first UserStatus that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userStatusFindFirstArgs} args - Arguments to find a UserStatus
     * @example
     * // Get one UserStatus
     * const userStatus = await prisma.userStatus.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends userStatusFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, userStatusFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'userStatus'> extends True ? Prisma__userStatusClient<userStatusGetPayload<T>> : Prisma__userStatusClient<userStatusGetPayload<T> | null, null>

    /**
     * Find the first UserStatus that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userStatusFindFirstOrThrowArgs} args - Arguments to find a UserStatus
     * @example
     * // Get one UserStatus
     * const userStatus = await prisma.userStatus.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends userStatusFindFirstOrThrowArgs>(
      args?: SelectSubset<T, userStatusFindFirstOrThrowArgs>
    ): Prisma__userStatusClient<userStatusGetPayload<T>>

    /**
     * Find zero or more UserStatuses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userStatusFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserStatuses
     * const userStatuses = await prisma.userStatus.findMany()
     * 
     * // Get first 10 UserStatuses
     * const userStatuses = await prisma.userStatus.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userStatusWithIdOnly = await prisma.userStatus.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends userStatusFindManyArgs>(
      args?: SelectSubset<T, userStatusFindManyArgs>
    ): Prisma.PrismaPromise<Array<userStatusGetPayload<T>>>

    /**
     * Create a UserStatus.
     * @param {userStatusCreateArgs} args - Arguments to create a UserStatus.
     * @example
     * // Create one UserStatus
     * const UserStatus = await prisma.userStatus.create({
     *   data: {
     *     // ... data to create a UserStatus
     *   }
     * })
     * 
    **/
    create<T extends userStatusCreateArgs>(
      args: SelectSubset<T, userStatusCreateArgs>
    ): Prisma__userStatusClient<userStatusGetPayload<T>>

    /**
     * Create many UserStatuses.
     *     @param {userStatusCreateManyArgs} args - Arguments to create many UserStatuses.
     *     @example
     *     // Create many UserStatuses
     *     const userStatus = await prisma.userStatus.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends userStatusCreateManyArgs>(
      args?: SelectSubset<T, userStatusCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a UserStatus.
     * @param {userStatusDeleteArgs} args - Arguments to delete one UserStatus.
     * @example
     * // Delete one UserStatus
     * const UserStatus = await prisma.userStatus.delete({
     *   where: {
     *     // ... filter to delete one UserStatus
     *   }
     * })
     * 
    **/
    delete<T extends userStatusDeleteArgs>(
      args: SelectSubset<T, userStatusDeleteArgs>
    ): Prisma__userStatusClient<userStatusGetPayload<T>>

    /**
     * Update one UserStatus.
     * @param {userStatusUpdateArgs} args - Arguments to update one UserStatus.
     * @example
     * // Update one UserStatus
     * const userStatus = await prisma.userStatus.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends userStatusUpdateArgs>(
      args: SelectSubset<T, userStatusUpdateArgs>
    ): Prisma__userStatusClient<userStatusGetPayload<T>>

    /**
     * Delete zero or more UserStatuses.
     * @param {userStatusDeleteManyArgs} args - Arguments to filter UserStatuses to delete.
     * @example
     * // Delete a few UserStatuses
     * const { count } = await prisma.userStatus.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends userStatusDeleteManyArgs>(
      args?: SelectSubset<T, userStatusDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserStatuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userStatusUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserStatuses
     * const userStatus = await prisma.userStatus.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends userStatusUpdateManyArgs>(
      args: SelectSubset<T, userStatusUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserStatus.
     * @param {userStatusUpsertArgs} args - Arguments to update or create a UserStatus.
     * @example
     * // Update or create a UserStatus
     * const userStatus = await prisma.userStatus.upsert({
     *   create: {
     *     // ... data to create a UserStatus
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserStatus we want to update
     *   }
     * })
    **/
    upsert<T extends userStatusUpsertArgs>(
      args: SelectSubset<T, userStatusUpsertArgs>
    ): Prisma__userStatusClient<userStatusGetPayload<T>>

    /**
     * Count the number of UserStatuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userStatusCountArgs} args - Arguments to filter UserStatuses to count.
     * @example
     * // Count the number of UserStatuses
     * const count = await prisma.userStatus.count({
     *   where: {
     *     // ... the filter for the UserStatuses we want to count
     *   }
     * })
    **/
    count<T extends userStatusCountArgs>(
      args?: Subset<T, userStatusCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserStatusCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserStatus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserStatusAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserStatusAggregateArgs>(args: Subset<T, UserStatusAggregateArgs>): Prisma.PrismaPromise<GetUserStatusAggregateType<T>>

    /**
     * Group by UserStatus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserStatusGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserStatusGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserStatusGroupByArgs['orderBy'] }
        : { orderBy?: UserStatusGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserStatusGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserStatusGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for userStatus.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__userStatusClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    users<T extends userStatus$usersArgs= {}>(args?: Subset<T, userStatus$usersArgs>): Prisma.PrismaPromise<Array<usersGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * userStatus base type for findUnique actions
   */
  export type userStatusFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the userStatus
     */
    select?: userStatusSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userStatusInclude | null
    /**
     * Filter, which userStatus to fetch.
     */
    where: userStatusWhereUniqueInput
  }

  /**
   * userStatus findUnique
   */
  export interface userStatusFindUniqueArgs extends userStatusFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * userStatus findUniqueOrThrow
   */
  export type userStatusFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the userStatus
     */
    select?: userStatusSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userStatusInclude | null
    /**
     * Filter, which userStatus to fetch.
     */
    where: userStatusWhereUniqueInput
  }


  /**
   * userStatus base type for findFirst actions
   */
  export type userStatusFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the userStatus
     */
    select?: userStatusSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userStatusInclude | null
    /**
     * Filter, which userStatus to fetch.
     */
    where?: userStatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of userStatuses to fetch.
     */
    orderBy?: Enumerable<userStatusOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for userStatuses.
     */
    cursor?: userStatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` userStatuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` userStatuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of userStatuses.
     */
    distinct?: Enumerable<UserStatusScalarFieldEnum>
  }

  /**
   * userStatus findFirst
   */
  export interface userStatusFindFirstArgs extends userStatusFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * userStatus findFirstOrThrow
   */
  export type userStatusFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the userStatus
     */
    select?: userStatusSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userStatusInclude | null
    /**
     * Filter, which userStatus to fetch.
     */
    where?: userStatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of userStatuses to fetch.
     */
    orderBy?: Enumerable<userStatusOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for userStatuses.
     */
    cursor?: userStatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` userStatuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` userStatuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of userStatuses.
     */
    distinct?: Enumerable<UserStatusScalarFieldEnum>
  }


  /**
   * userStatus findMany
   */
  export type userStatusFindManyArgs = {
    /**
     * Select specific fields to fetch from the userStatus
     */
    select?: userStatusSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userStatusInclude | null
    /**
     * Filter, which userStatuses to fetch.
     */
    where?: userStatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of userStatuses to fetch.
     */
    orderBy?: Enumerable<userStatusOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing userStatuses.
     */
    cursor?: userStatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` userStatuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` userStatuses.
     */
    skip?: number
    distinct?: Enumerable<UserStatusScalarFieldEnum>
  }


  /**
   * userStatus create
   */
  export type userStatusCreateArgs = {
    /**
     * Select specific fields to fetch from the userStatus
     */
    select?: userStatusSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userStatusInclude | null
    /**
     * The data needed to create a userStatus.
     */
    data: XOR<userStatusCreateInput, userStatusUncheckedCreateInput>
  }


  /**
   * userStatus createMany
   */
  export type userStatusCreateManyArgs = {
    /**
     * The data used to create many userStatuses.
     */
    data: Enumerable<userStatusCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * userStatus update
   */
  export type userStatusUpdateArgs = {
    /**
     * Select specific fields to fetch from the userStatus
     */
    select?: userStatusSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userStatusInclude | null
    /**
     * The data needed to update a userStatus.
     */
    data: XOR<userStatusUpdateInput, userStatusUncheckedUpdateInput>
    /**
     * Choose, which userStatus to update.
     */
    where: userStatusWhereUniqueInput
  }


  /**
   * userStatus updateMany
   */
  export type userStatusUpdateManyArgs = {
    /**
     * The data used to update userStatuses.
     */
    data: XOR<userStatusUpdateManyMutationInput, userStatusUncheckedUpdateManyInput>
    /**
     * Filter which userStatuses to update
     */
    where?: userStatusWhereInput
  }


  /**
   * userStatus upsert
   */
  export type userStatusUpsertArgs = {
    /**
     * Select specific fields to fetch from the userStatus
     */
    select?: userStatusSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userStatusInclude | null
    /**
     * The filter to search for the userStatus to update in case it exists.
     */
    where: userStatusWhereUniqueInput
    /**
     * In case the userStatus found by the `where` argument doesn't exist, create a new userStatus with this data.
     */
    create: XOR<userStatusCreateInput, userStatusUncheckedCreateInput>
    /**
     * In case the userStatus was found with the provided `where` argument, update it with this data.
     */
    update: XOR<userStatusUpdateInput, userStatusUncheckedUpdateInput>
  }


  /**
   * userStatus delete
   */
  export type userStatusDeleteArgs = {
    /**
     * Select specific fields to fetch from the userStatus
     */
    select?: userStatusSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userStatusInclude | null
    /**
     * Filter which userStatus to delete.
     */
    where: userStatusWhereUniqueInput
  }


  /**
   * userStatus deleteMany
   */
  export type userStatusDeleteManyArgs = {
    /**
     * Filter which userStatuses to delete
     */
    where?: userStatusWhereInput
  }


  /**
   * userStatus.users
   */
  export type userStatus$usersArgs = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude | null
    where?: usersWhereInput
    orderBy?: Enumerable<usersOrderByWithRelationInput>
    cursor?: usersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<UsersScalarFieldEnum>
  }


  /**
   * userStatus without action
   */
  export type userStatusArgs = {
    /**
     * Select specific fields to fetch from the userStatus
     */
    select?: userStatusSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userStatusInclude | null
  }



  /**
   * Model users
   */


  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersMinAggregateOutputType = {
    id: string | null
    phone: string | null
    created_at: Date | null
    updated_at: Date | null
    user_status_id: string | null
  }

  export type UsersMaxAggregateOutputType = {
    id: string | null
    phone: string | null
    created_at: Date | null
    updated_at: Date | null
    user_status_id: string | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    phone: number
    created_at: number
    updated_at: number
    user_status_id: number
    _all: number
  }


  export type UsersMinAggregateInputType = {
    id?: true
    phone?: true
    created_at?: true
    updated_at?: true
    user_status_id?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    phone?: true
    created_at?: true
    updated_at?: true
    user_status_id?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    phone?: true
    created_at?: true
    updated_at?: true
    user_status_id?: true
    _all?: true
  }

  export type UsersAggregateArgs = {
    /**
     * Filter which users to aggregate.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: Enumerable<usersOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type UsersGroupByArgs = {
    where?: usersWhereInput
    orderBy?: Enumerable<usersOrderByWithAggregationInput>
    by: UsersScalarFieldEnum[]
    having?: usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }


  export type UsersGroupByOutputType = {
    id: string
    phone: string
    created_at: Date
    updated_at: Date
    user_status_id: string
    _count: UsersCountAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends UsersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type usersSelect = {
    id?: boolean
    phone?: boolean
    created_at?: boolean
    updated_at?: boolean
    user_status_id?: boolean
    otpHistory?: boolean | users$otpHistoryArgs
    user_status?: boolean | userStatusArgs
    _count?: boolean | UsersCountOutputTypeArgs
  }


  export type usersInclude = {
    otpHistory?: boolean | users$otpHistoryArgs
    user_status?: boolean | userStatusArgs
    _count?: boolean | UsersCountOutputTypeArgs
  }

  export type usersGetPayload<S extends boolean | null | undefined | usersArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? users :
    S extends undefined ? never :
    S extends { include: any } & (usersArgs | usersFindManyArgs)
    ? users  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'otpHistory' ? Array < otpHistoryGetPayload<S['include'][P]>>  :
        P extends 'user_status' ? userStatusGetPayload<S['include'][P]> :
        P extends '_count' ? UsersCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (usersArgs | usersFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'otpHistory' ? Array < otpHistoryGetPayload<S['select'][P]>>  :
        P extends 'user_status' ? userStatusGetPayload<S['select'][P]> :
        P extends '_count' ? UsersCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof users ? users[P] : never
  } 
      : users


  type usersCountArgs = 
    Omit<usersFindManyArgs, 'select' | 'include'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface usersDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Users that matches the filter.
     * @param {usersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends usersFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, usersFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'users'> extends True ? Prisma__usersClient<usersGetPayload<T>> : Prisma__usersClient<usersGetPayload<T> | null, null>

    /**
     * Find one Users that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {usersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends usersFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, usersFindUniqueOrThrowArgs>
    ): Prisma__usersClient<usersGetPayload<T>>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends usersFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, usersFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'users'> extends True ? Prisma__usersClient<usersGetPayload<T>> : Prisma__usersClient<usersGetPayload<T> | null, null>

    /**
     * Find the first Users that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends usersFindFirstOrThrowArgs>(
      args?: SelectSubset<T, usersFindFirstOrThrowArgs>
    ): Prisma__usersClient<usersGetPayload<T>>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends usersFindManyArgs>(
      args?: SelectSubset<T, usersFindManyArgs>
    ): Prisma.PrismaPromise<Array<usersGetPayload<T>>>

    /**
     * Create a Users.
     * @param {usersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
    **/
    create<T extends usersCreateArgs>(
      args: SelectSubset<T, usersCreateArgs>
    ): Prisma__usersClient<usersGetPayload<T>>

    /**
     * Create many Users.
     *     @param {usersCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const users = await prisma.users.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends usersCreateManyArgs>(
      args?: SelectSubset<T, usersCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Users.
     * @param {usersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
    **/
    delete<T extends usersDeleteArgs>(
      args: SelectSubset<T, usersDeleteArgs>
    ): Prisma__usersClient<usersGetPayload<T>>

    /**
     * Update one Users.
     * @param {usersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends usersUpdateArgs>(
      args: SelectSubset<T, usersUpdateArgs>
    ): Prisma__usersClient<usersGetPayload<T>>

    /**
     * Delete zero or more Users.
     * @param {usersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends usersDeleteManyArgs>(
      args?: SelectSubset<T, usersDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends usersUpdateManyArgs>(
      args: SelectSubset<T, usersUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Users.
     * @param {usersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
    **/
    upsert<T extends usersUpsertArgs>(
      args: SelectSubset<T, usersUpsertArgs>
    ): Prisma__usersClient<usersGetPayload<T>>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends usersCountArgs>(
      args?: Subset<T, usersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UsersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsersGroupByArgs['orderBy'] }
        : { orderBy?: UsersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UsersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__usersClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    otpHistory<T extends users$otpHistoryArgs= {}>(args?: Subset<T, users$otpHistoryArgs>): Prisma.PrismaPromise<Array<otpHistoryGetPayload<T>>| Null>;

    user_status<T extends userStatusArgs= {}>(args?: Subset<T, userStatusArgs>): Prisma__userStatusClient<userStatusGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * users base type for findUnique actions
   */
  export type usersFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findUnique
   */
  export interface usersFindUniqueArgs extends usersFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * users findUniqueOrThrow
   */
  export type usersFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }


  /**
   * users base type for findFirst actions
   */
  export type usersFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: Enumerable<usersOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: Enumerable<UsersScalarFieldEnum>
  }

  /**
   * users findFirst
   */
  export interface usersFindFirstArgs extends usersFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * users findFirstOrThrow
   */
  export type usersFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: Enumerable<usersOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: Enumerable<UsersScalarFieldEnum>
  }


  /**
   * users findMany
   */
  export type usersFindManyArgs = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: Enumerable<usersOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: Enumerable<UsersScalarFieldEnum>
  }


  /**
   * users create
   */
  export type usersCreateArgs = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude | null
    /**
     * The data needed to create a users.
     */
    data: XOR<usersCreateInput, usersUncheckedCreateInput>
  }


  /**
   * users createMany
   */
  export type usersCreateManyArgs = {
    /**
     * The data used to create many users.
     */
    data: Enumerable<usersCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * users update
   */
  export type usersUpdateArgs = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude | null
    /**
     * The data needed to update a users.
     */
    data: XOR<usersUpdateInput, usersUncheckedUpdateInput>
    /**
     * Choose, which users to update.
     */
    where: usersWhereUniqueInput
  }


  /**
   * users updateMany
   */
  export type usersUpdateManyArgs = {
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
  }


  /**
   * users upsert
   */
  export type usersUpsertArgs = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude | null
    /**
     * The filter to search for the users to update in case it exists.
     */
    where: usersWhereUniqueInput
    /**
     * In case the users found by the `where` argument doesn't exist, create a new users with this data.
     */
    create: XOR<usersCreateInput, usersUncheckedCreateInput>
    /**
     * In case the users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usersUpdateInput, usersUncheckedUpdateInput>
  }


  /**
   * users delete
   */
  export type usersDeleteArgs = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude | null
    /**
     * Filter which users to delete.
     */
    where: usersWhereUniqueInput
  }


  /**
   * users deleteMany
   */
  export type usersDeleteManyArgs = {
    /**
     * Filter which users to delete
     */
    where?: usersWhereInput
  }


  /**
   * users.otpHistory
   */
  export type users$otpHistoryArgs = {
    /**
     * Select specific fields to fetch from the otpHistory
     */
    select?: otpHistorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: otpHistoryInclude | null
    where?: otpHistoryWhereInput
    orderBy?: Enumerable<otpHistoryOrderByWithRelationInput>
    cursor?: otpHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<OtpHistoryScalarFieldEnum>
  }


  /**
   * users without action
   */
  export type usersArgs = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude | null
  }



  /**
   * Model otpHistory
   */


  export type AggregateOtpHistory = {
    _count: OtpHistoryCountAggregateOutputType | null
    _min: OtpHistoryMinAggregateOutputType | null
    _max: OtpHistoryMaxAggregateOutputType | null
  }

  export type OtpHistoryMinAggregateOutputType = {
    id: string | null
    code: string | null
    created_at: Date | null
    updated_at: Date | null
    user_id: string | null
  }

  export type OtpHistoryMaxAggregateOutputType = {
    id: string | null
    code: string | null
    created_at: Date | null
    updated_at: Date | null
    user_id: string | null
  }

  export type OtpHistoryCountAggregateOutputType = {
    id: number
    code: number
    created_at: number
    updated_at: number
    user_id: number
    _all: number
  }


  export type OtpHistoryMinAggregateInputType = {
    id?: true
    code?: true
    created_at?: true
    updated_at?: true
    user_id?: true
  }

  export type OtpHistoryMaxAggregateInputType = {
    id?: true
    code?: true
    created_at?: true
    updated_at?: true
    user_id?: true
  }

  export type OtpHistoryCountAggregateInputType = {
    id?: true
    code?: true
    created_at?: true
    updated_at?: true
    user_id?: true
    _all?: true
  }

  export type OtpHistoryAggregateArgs = {
    /**
     * Filter which otpHistory to aggregate.
     */
    where?: otpHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of otpHistories to fetch.
     */
    orderBy?: Enumerable<otpHistoryOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: otpHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` otpHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` otpHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned otpHistories
    **/
    _count?: true | OtpHistoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OtpHistoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OtpHistoryMaxAggregateInputType
  }

  export type GetOtpHistoryAggregateType<T extends OtpHistoryAggregateArgs> = {
        [P in keyof T & keyof AggregateOtpHistory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOtpHistory[P]>
      : GetScalarType<T[P], AggregateOtpHistory[P]>
  }




  export type OtpHistoryGroupByArgs = {
    where?: otpHistoryWhereInput
    orderBy?: Enumerable<otpHistoryOrderByWithAggregationInput>
    by: OtpHistoryScalarFieldEnum[]
    having?: otpHistoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OtpHistoryCountAggregateInputType | true
    _min?: OtpHistoryMinAggregateInputType
    _max?: OtpHistoryMaxAggregateInputType
  }


  export type OtpHistoryGroupByOutputType = {
    id: string
    code: string | null
    created_at: Date
    updated_at: Date
    user_id: string
    _count: OtpHistoryCountAggregateOutputType | null
    _min: OtpHistoryMinAggregateOutputType | null
    _max: OtpHistoryMaxAggregateOutputType | null
  }

  type GetOtpHistoryGroupByPayload<T extends OtpHistoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<OtpHistoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OtpHistoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OtpHistoryGroupByOutputType[P]>
            : GetScalarType<T[P], OtpHistoryGroupByOutputType[P]>
        }
      >
    >


  export type otpHistorySelect = {
    id?: boolean
    code?: boolean
    created_at?: boolean
    updated_at?: boolean
    user_id?: boolean
    user?: boolean | usersArgs
  }


  export type otpHistoryInclude = {
    user?: boolean | usersArgs
  }

  export type otpHistoryGetPayload<S extends boolean | null | undefined | otpHistoryArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? otpHistory :
    S extends undefined ? never :
    S extends { include: any } & (otpHistoryArgs | otpHistoryFindManyArgs)
    ? otpHistory  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'user' ? usersGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (otpHistoryArgs | otpHistoryFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'user' ? usersGetPayload<S['select'][P]> :  P extends keyof otpHistory ? otpHistory[P] : never
  } 
      : otpHistory


  type otpHistoryCountArgs = 
    Omit<otpHistoryFindManyArgs, 'select' | 'include'> & {
      select?: OtpHistoryCountAggregateInputType | true
    }

  export interface otpHistoryDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one OtpHistory that matches the filter.
     * @param {otpHistoryFindUniqueArgs} args - Arguments to find a OtpHistory
     * @example
     * // Get one OtpHistory
     * const otpHistory = await prisma.otpHistory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends otpHistoryFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, otpHistoryFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'otpHistory'> extends True ? Prisma__otpHistoryClient<otpHistoryGetPayload<T>> : Prisma__otpHistoryClient<otpHistoryGetPayload<T> | null, null>

    /**
     * Find one OtpHistory that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {otpHistoryFindUniqueOrThrowArgs} args - Arguments to find a OtpHistory
     * @example
     * // Get one OtpHistory
     * const otpHistory = await prisma.otpHistory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends otpHistoryFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, otpHistoryFindUniqueOrThrowArgs>
    ): Prisma__otpHistoryClient<otpHistoryGetPayload<T>>

    /**
     * Find the first OtpHistory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {otpHistoryFindFirstArgs} args - Arguments to find a OtpHistory
     * @example
     * // Get one OtpHistory
     * const otpHistory = await prisma.otpHistory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends otpHistoryFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, otpHistoryFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'otpHistory'> extends True ? Prisma__otpHistoryClient<otpHistoryGetPayload<T>> : Prisma__otpHistoryClient<otpHistoryGetPayload<T> | null, null>

    /**
     * Find the first OtpHistory that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {otpHistoryFindFirstOrThrowArgs} args - Arguments to find a OtpHistory
     * @example
     * // Get one OtpHistory
     * const otpHistory = await prisma.otpHistory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends otpHistoryFindFirstOrThrowArgs>(
      args?: SelectSubset<T, otpHistoryFindFirstOrThrowArgs>
    ): Prisma__otpHistoryClient<otpHistoryGetPayload<T>>

    /**
     * Find zero or more OtpHistories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {otpHistoryFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OtpHistories
     * const otpHistories = await prisma.otpHistory.findMany()
     * 
     * // Get first 10 OtpHistories
     * const otpHistories = await prisma.otpHistory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const otpHistoryWithIdOnly = await prisma.otpHistory.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends otpHistoryFindManyArgs>(
      args?: SelectSubset<T, otpHistoryFindManyArgs>
    ): Prisma.PrismaPromise<Array<otpHistoryGetPayload<T>>>

    /**
     * Create a OtpHistory.
     * @param {otpHistoryCreateArgs} args - Arguments to create a OtpHistory.
     * @example
     * // Create one OtpHistory
     * const OtpHistory = await prisma.otpHistory.create({
     *   data: {
     *     // ... data to create a OtpHistory
     *   }
     * })
     * 
    **/
    create<T extends otpHistoryCreateArgs>(
      args: SelectSubset<T, otpHistoryCreateArgs>
    ): Prisma__otpHistoryClient<otpHistoryGetPayload<T>>

    /**
     * Create many OtpHistories.
     *     @param {otpHistoryCreateManyArgs} args - Arguments to create many OtpHistories.
     *     @example
     *     // Create many OtpHistories
     *     const otpHistory = await prisma.otpHistory.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends otpHistoryCreateManyArgs>(
      args?: SelectSubset<T, otpHistoryCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a OtpHistory.
     * @param {otpHistoryDeleteArgs} args - Arguments to delete one OtpHistory.
     * @example
     * // Delete one OtpHistory
     * const OtpHistory = await prisma.otpHistory.delete({
     *   where: {
     *     // ... filter to delete one OtpHistory
     *   }
     * })
     * 
    **/
    delete<T extends otpHistoryDeleteArgs>(
      args: SelectSubset<T, otpHistoryDeleteArgs>
    ): Prisma__otpHistoryClient<otpHistoryGetPayload<T>>

    /**
     * Update one OtpHistory.
     * @param {otpHistoryUpdateArgs} args - Arguments to update one OtpHistory.
     * @example
     * // Update one OtpHistory
     * const otpHistory = await prisma.otpHistory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends otpHistoryUpdateArgs>(
      args: SelectSubset<T, otpHistoryUpdateArgs>
    ): Prisma__otpHistoryClient<otpHistoryGetPayload<T>>

    /**
     * Delete zero or more OtpHistories.
     * @param {otpHistoryDeleteManyArgs} args - Arguments to filter OtpHistories to delete.
     * @example
     * // Delete a few OtpHistories
     * const { count } = await prisma.otpHistory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends otpHistoryDeleteManyArgs>(
      args?: SelectSubset<T, otpHistoryDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OtpHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {otpHistoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OtpHistories
     * const otpHistory = await prisma.otpHistory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends otpHistoryUpdateManyArgs>(
      args: SelectSubset<T, otpHistoryUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one OtpHistory.
     * @param {otpHistoryUpsertArgs} args - Arguments to update or create a OtpHistory.
     * @example
     * // Update or create a OtpHistory
     * const otpHistory = await prisma.otpHistory.upsert({
     *   create: {
     *     // ... data to create a OtpHistory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OtpHistory we want to update
     *   }
     * })
    **/
    upsert<T extends otpHistoryUpsertArgs>(
      args: SelectSubset<T, otpHistoryUpsertArgs>
    ): Prisma__otpHistoryClient<otpHistoryGetPayload<T>>

    /**
     * Count the number of OtpHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {otpHistoryCountArgs} args - Arguments to filter OtpHistories to count.
     * @example
     * // Count the number of OtpHistories
     * const count = await prisma.otpHistory.count({
     *   where: {
     *     // ... the filter for the OtpHistories we want to count
     *   }
     * })
    **/
    count<T extends otpHistoryCountArgs>(
      args?: Subset<T, otpHistoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OtpHistoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OtpHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtpHistoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OtpHistoryAggregateArgs>(args: Subset<T, OtpHistoryAggregateArgs>): Prisma.PrismaPromise<GetOtpHistoryAggregateType<T>>

    /**
     * Group by OtpHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtpHistoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OtpHistoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OtpHistoryGroupByArgs['orderBy'] }
        : { orderBy?: OtpHistoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OtpHistoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOtpHistoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for otpHistory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__otpHistoryClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    user<T extends usersArgs= {}>(args?: Subset<T, usersArgs>): Prisma__usersClient<usersGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * otpHistory base type for findUnique actions
   */
  export type otpHistoryFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the otpHistory
     */
    select?: otpHistorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: otpHistoryInclude | null
    /**
     * Filter, which otpHistory to fetch.
     */
    where: otpHistoryWhereUniqueInput
  }

  /**
   * otpHistory findUnique
   */
  export interface otpHistoryFindUniqueArgs extends otpHistoryFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * otpHistory findUniqueOrThrow
   */
  export type otpHistoryFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the otpHistory
     */
    select?: otpHistorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: otpHistoryInclude | null
    /**
     * Filter, which otpHistory to fetch.
     */
    where: otpHistoryWhereUniqueInput
  }


  /**
   * otpHistory base type for findFirst actions
   */
  export type otpHistoryFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the otpHistory
     */
    select?: otpHistorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: otpHistoryInclude | null
    /**
     * Filter, which otpHistory to fetch.
     */
    where?: otpHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of otpHistories to fetch.
     */
    orderBy?: Enumerable<otpHistoryOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for otpHistories.
     */
    cursor?: otpHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` otpHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` otpHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of otpHistories.
     */
    distinct?: Enumerable<OtpHistoryScalarFieldEnum>
  }

  /**
   * otpHistory findFirst
   */
  export interface otpHistoryFindFirstArgs extends otpHistoryFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * otpHistory findFirstOrThrow
   */
  export type otpHistoryFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the otpHistory
     */
    select?: otpHistorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: otpHistoryInclude | null
    /**
     * Filter, which otpHistory to fetch.
     */
    where?: otpHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of otpHistories to fetch.
     */
    orderBy?: Enumerable<otpHistoryOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for otpHistories.
     */
    cursor?: otpHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` otpHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` otpHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of otpHistories.
     */
    distinct?: Enumerable<OtpHistoryScalarFieldEnum>
  }


  /**
   * otpHistory findMany
   */
  export type otpHistoryFindManyArgs = {
    /**
     * Select specific fields to fetch from the otpHistory
     */
    select?: otpHistorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: otpHistoryInclude | null
    /**
     * Filter, which otpHistories to fetch.
     */
    where?: otpHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of otpHistories to fetch.
     */
    orderBy?: Enumerable<otpHistoryOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing otpHistories.
     */
    cursor?: otpHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` otpHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` otpHistories.
     */
    skip?: number
    distinct?: Enumerable<OtpHistoryScalarFieldEnum>
  }


  /**
   * otpHistory create
   */
  export type otpHistoryCreateArgs = {
    /**
     * Select specific fields to fetch from the otpHistory
     */
    select?: otpHistorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: otpHistoryInclude | null
    /**
     * The data needed to create a otpHistory.
     */
    data: XOR<otpHistoryCreateInput, otpHistoryUncheckedCreateInput>
  }


  /**
   * otpHistory createMany
   */
  export type otpHistoryCreateManyArgs = {
    /**
     * The data used to create many otpHistories.
     */
    data: Enumerable<otpHistoryCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * otpHistory update
   */
  export type otpHistoryUpdateArgs = {
    /**
     * Select specific fields to fetch from the otpHistory
     */
    select?: otpHistorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: otpHistoryInclude | null
    /**
     * The data needed to update a otpHistory.
     */
    data: XOR<otpHistoryUpdateInput, otpHistoryUncheckedUpdateInput>
    /**
     * Choose, which otpHistory to update.
     */
    where: otpHistoryWhereUniqueInput
  }


  /**
   * otpHistory updateMany
   */
  export type otpHistoryUpdateManyArgs = {
    /**
     * The data used to update otpHistories.
     */
    data: XOR<otpHistoryUpdateManyMutationInput, otpHistoryUncheckedUpdateManyInput>
    /**
     * Filter which otpHistories to update
     */
    where?: otpHistoryWhereInput
  }


  /**
   * otpHistory upsert
   */
  export type otpHistoryUpsertArgs = {
    /**
     * Select specific fields to fetch from the otpHistory
     */
    select?: otpHistorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: otpHistoryInclude | null
    /**
     * The filter to search for the otpHistory to update in case it exists.
     */
    where: otpHistoryWhereUniqueInput
    /**
     * In case the otpHistory found by the `where` argument doesn't exist, create a new otpHistory with this data.
     */
    create: XOR<otpHistoryCreateInput, otpHistoryUncheckedCreateInput>
    /**
     * In case the otpHistory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<otpHistoryUpdateInput, otpHistoryUncheckedUpdateInput>
  }


  /**
   * otpHistory delete
   */
  export type otpHistoryDeleteArgs = {
    /**
     * Select specific fields to fetch from the otpHistory
     */
    select?: otpHistorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: otpHistoryInclude | null
    /**
     * Filter which otpHistory to delete.
     */
    where: otpHistoryWhereUniqueInput
  }


  /**
   * otpHistory deleteMany
   */
  export type otpHistoryDeleteManyArgs = {
    /**
     * Filter which otpHistories to delete
     */
    where?: otpHistoryWhereInput
  }


  /**
   * otpHistory without action
   */
  export type otpHistoryArgs = {
    /**
     * Select specific fields to fetch from the otpHistory
     */
    select?: otpHistorySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: otpHistoryInclude | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const OtpHistoryScalarFieldEnum: {
    id: 'id',
    code: 'code',
    created_at: 'created_at',
    updated_at: 'updated_at',
    user_id: 'user_id'
  };

  export type OtpHistoryScalarFieldEnum = (typeof OtpHistoryScalarFieldEnum)[keyof typeof OtpHistoryScalarFieldEnum]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserStatusScalarFieldEnum: {
    id: 'id',
    name: 'name',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type UserStatusScalarFieldEnum = (typeof UserStatusScalarFieldEnum)[keyof typeof UserStatusScalarFieldEnum]


  export const UsersScalarFieldEnum: {
    id: 'id',
    phone: 'phone',
    created_at: 'created_at',
    updated_at: 'updated_at',
    user_status_id: 'user_status_id'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  /**
   * Deep Input Types
   */


  export type userStatusWhereInput = {
    AND?: Enumerable<userStatusWhereInput>
    OR?: Enumerable<userStatusWhereInput>
    NOT?: Enumerable<userStatusWhereInput>
    id?: StringFilter | string
    name?: StringFilter | string
    created_at?: DateTimeFilter | Date | string
    updated_at?: DateTimeFilter | Date | string
    users?: UsersListRelationFilter
  }

  export type userStatusOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    users?: usersOrderByRelationAggregateInput
  }

  export type userStatusWhereUniqueInput = {
    id?: string
  }

  export type userStatusOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: userStatusCountOrderByAggregateInput
    _max?: userStatusMaxOrderByAggregateInput
    _min?: userStatusMinOrderByAggregateInput
  }

  export type userStatusScalarWhereWithAggregatesInput = {
    AND?: Enumerable<userStatusScalarWhereWithAggregatesInput>
    OR?: Enumerable<userStatusScalarWhereWithAggregatesInput>
    NOT?: Enumerable<userStatusScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    name?: StringWithAggregatesFilter | string
    created_at?: DateTimeWithAggregatesFilter | Date | string
    updated_at?: DateTimeWithAggregatesFilter | Date | string
  }

  export type usersWhereInput = {
    AND?: Enumerable<usersWhereInput>
    OR?: Enumerable<usersWhereInput>
    NOT?: Enumerable<usersWhereInput>
    id?: StringFilter | string
    phone?: StringFilter | string
    created_at?: DateTimeFilter | Date | string
    updated_at?: DateTimeFilter | Date | string
    user_status_id?: StringFilter | string
    otpHistory?: OtpHistoryListRelationFilter
    user_status?: XOR<UserStatusRelationFilter, userStatusWhereInput>
  }

  export type usersOrderByWithRelationInput = {
    id?: SortOrder
    phone?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    user_status_id?: SortOrder
    otpHistory?: otpHistoryOrderByRelationAggregateInput
    user_status?: userStatusOrderByWithRelationInput
  }

  export type usersWhereUniqueInput = {
    id?: string
  }

  export type usersOrderByWithAggregationInput = {
    id?: SortOrder
    phone?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    user_status_id?: SortOrder
    _count?: usersCountOrderByAggregateInput
    _max?: usersMaxOrderByAggregateInput
    _min?: usersMinOrderByAggregateInput
  }

  export type usersScalarWhereWithAggregatesInput = {
    AND?: Enumerable<usersScalarWhereWithAggregatesInput>
    OR?: Enumerable<usersScalarWhereWithAggregatesInput>
    NOT?: Enumerable<usersScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    phone?: StringWithAggregatesFilter | string
    created_at?: DateTimeWithAggregatesFilter | Date | string
    updated_at?: DateTimeWithAggregatesFilter | Date | string
    user_status_id?: StringWithAggregatesFilter | string
  }

  export type otpHistoryWhereInput = {
    AND?: Enumerable<otpHistoryWhereInput>
    OR?: Enumerable<otpHistoryWhereInput>
    NOT?: Enumerable<otpHistoryWhereInput>
    id?: StringFilter | string
    code?: StringNullableFilter | string | null
    created_at?: DateTimeFilter | Date | string
    updated_at?: DateTimeFilter | Date | string
    user_id?: StringFilter | string
    user?: XOR<UsersRelationFilter, usersWhereInput>
  }

  export type otpHistoryOrderByWithRelationInput = {
    id?: SortOrder
    code?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    user_id?: SortOrder
    user?: usersOrderByWithRelationInput
  }

  export type otpHistoryWhereUniqueInput = {
    id?: string
  }

  export type otpHistoryOrderByWithAggregationInput = {
    id?: SortOrder
    code?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    user_id?: SortOrder
    _count?: otpHistoryCountOrderByAggregateInput
    _max?: otpHistoryMaxOrderByAggregateInput
    _min?: otpHistoryMinOrderByAggregateInput
  }

  export type otpHistoryScalarWhereWithAggregatesInput = {
    AND?: Enumerable<otpHistoryScalarWhereWithAggregatesInput>
    OR?: Enumerable<otpHistoryScalarWhereWithAggregatesInput>
    NOT?: Enumerable<otpHistoryScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    code?: StringNullableWithAggregatesFilter | string | null
    created_at?: DateTimeWithAggregatesFilter | Date | string
    updated_at?: DateTimeWithAggregatesFilter | Date | string
    user_id?: StringWithAggregatesFilter | string
  }

  export type userStatusCreateInput = {
    id?: string
    name: string
    created_at?: Date | string
    updated_at?: Date | string
    users?: usersCreateNestedManyWithoutUser_statusInput
  }

  export type userStatusUncheckedCreateInput = {
    id?: string
    name: string
    created_at?: Date | string
    updated_at?: Date | string
    users?: usersUncheckedCreateNestedManyWithoutUser_statusInput
  }

  export type userStatusUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: usersUpdateManyWithoutUser_statusNestedInput
  }

  export type userStatusUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: usersUncheckedUpdateManyWithoutUser_statusNestedInput
  }

  export type userStatusCreateManyInput = {
    id?: string
    name: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type userStatusUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type userStatusUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type usersCreateInput = {
    id?: string
    phone: string
    created_at?: Date | string
    updated_at?: Date | string
    otpHistory?: otpHistoryCreateNestedManyWithoutUserInput
    user_status: userStatusCreateNestedOneWithoutUsersInput
  }

  export type usersUncheckedCreateInput = {
    id?: string
    phone: string
    created_at?: Date | string
    updated_at?: Date | string
    user_status_id: string
    otpHistory?: otpHistoryUncheckedCreateNestedManyWithoutUserInput
  }

  export type usersUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    otpHistory?: otpHistoryUpdateManyWithoutUserNestedInput
    user_status?: userStatusUpdateOneRequiredWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_status_id?: StringFieldUpdateOperationsInput | string
    otpHistory?: otpHistoryUncheckedUpdateManyWithoutUserNestedInput
  }

  export type usersCreateManyInput = {
    id?: string
    phone: string
    created_at?: Date | string
    updated_at?: Date | string
    user_status_id: string
  }

  export type usersUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type usersUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_status_id?: StringFieldUpdateOperationsInput | string
  }

  export type otpHistoryCreateInput = {
    id?: string
    code?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    user: usersCreateNestedOneWithoutOtpHistoryInput
  }

  export type otpHistoryUncheckedCreateInput = {
    id?: string
    code?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    user_id: string
  }

  export type otpHistoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: usersUpdateOneRequiredWithoutOtpHistoryNestedInput
  }

  export type otpHistoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_id?: StringFieldUpdateOperationsInput | string
  }

  export type otpHistoryCreateManyInput = {
    id?: string
    code?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    user_id: string
  }

  export type otpHistoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type otpHistoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_id?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string> | string
    notIn?: Enumerable<string> | string
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringFilter | string
  }

  export type DateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string> | Date | string
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type UsersListRelationFilter = {
    every?: usersWhereInput
    some?: usersWhereInput
    none?: usersWhereInput
  }

  export type usersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type userStatusCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type userStatusMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type userStatusMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string> | string
    notIn?: Enumerable<string> | string
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type DateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string> | Date | string
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type OtpHistoryListRelationFilter = {
    every?: otpHistoryWhereInput
    some?: otpHistoryWhereInput
    none?: otpHistoryWhereInput
  }

  export type UserStatusRelationFilter = {
    is?: userStatusWhereInput
    isNot?: userStatusWhereInput
  }

  export type otpHistoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type usersCountOrderByAggregateInput = {
    id?: SortOrder
    phone?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    user_status_id?: SortOrder
  }

  export type usersMaxOrderByAggregateInput = {
    id?: SortOrder
    phone?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    user_status_id?: SortOrder
  }

  export type usersMinOrderByAggregateInput = {
    id?: SortOrder
    phone?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    user_status_id?: SortOrder
  }

  export type StringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | string | null
    notIn?: Enumerable<string> | string | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableFilter | string | null
  }

  export type UsersRelationFilter = {
    is?: usersWhereInput
    isNot?: usersWhereInput
  }

  export type otpHistoryCountOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    user_id?: SortOrder
  }

  export type otpHistoryMaxOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    user_id?: SortOrder
  }

  export type otpHistoryMinOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    user_id?: SortOrder
  }

  export type StringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | string | null
    notIn?: Enumerable<string> | string | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type usersCreateNestedManyWithoutUser_statusInput = {
    create?: XOR<Enumerable<usersCreateWithoutUser_statusInput>, Enumerable<usersUncheckedCreateWithoutUser_statusInput>>
    connectOrCreate?: Enumerable<usersCreateOrConnectWithoutUser_statusInput>
    createMany?: usersCreateManyUser_statusInputEnvelope
    connect?: Enumerable<usersWhereUniqueInput>
  }

  export type usersUncheckedCreateNestedManyWithoutUser_statusInput = {
    create?: XOR<Enumerable<usersCreateWithoutUser_statusInput>, Enumerable<usersUncheckedCreateWithoutUser_statusInput>>
    connectOrCreate?: Enumerable<usersCreateOrConnectWithoutUser_statusInput>
    createMany?: usersCreateManyUser_statusInputEnvelope
    connect?: Enumerable<usersWhereUniqueInput>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type usersUpdateManyWithoutUser_statusNestedInput = {
    create?: XOR<Enumerable<usersCreateWithoutUser_statusInput>, Enumerable<usersUncheckedCreateWithoutUser_statusInput>>
    connectOrCreate?: Enumerable<usersCreateOrConnectWithoutUser_statusInput>
    upsert?: Enumerable<usersUpsertWithWhereUniqueWithoutUser_statusInput>
    createMany?: usersCreateManyUser_statusInputEnvelope
    set?: Enumerable<usersWhereUniqueInput>
    disconnect?: Enumerable<usersWhereUniqueInput>
    delete?: Enumerable<usersWhereUniqueInput>
    connect?: Enumerable<usersWhereUniqueInput>
    update?: Enumerable<usersUpdateWithWhereUniqueWithoutUser_statusInput>
    updateMany?: Enumerable<usersUpdateManyWithWhereWithoutUser_statusInput>
    deleteMany?: Enumerable<usersScalarWhereInput>
  }

  export type usersUncheckedUpdateManyWithoutUser_statusNestedInput = {
    create?: XOR<Enumerable<usersCreateWithoutUser_statusInput>, Enumerable<usersUncheckedCreateWithoutUser_statusInput>>
    connectOrCreate?: Enumerable<usersCreateOrConnectWithoutUser_statusInput>
    upsert?: Enumerable<usersUpsertWithWhereUniqueWithoutUser_statusInput>
    createMany?: usersCreateManyUser_statusInputEnvelope
    set?: Enumerable<usersWhereUniqueInput>
    disconnect?: Enumerable<usersWhereUniqueInput>
    delete?: Enumerable<usersWhereUniqueInput>
    connect?: Enumerable<usersWhereUniqueInput>
    update?: Enumerable<usersUpdateWithWhereUniqueWithoutUser_statusInput>
    updateMany?: Enumerable<usersUpdateManyWithWhereWithoutUser_statusInput>
    deleteMany?: Enumerable<usersScalarWhereInput>
  }

  export type otpHistoryCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<otpHistoryCreateWithoutUserInput>, Enumerable<otpHistoryUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<otpHistoryCreateOrConnectWithoutUserInput>
    createMany?: otpHistoryCreateManyUserInputEnvelope
    connect?: Enumerable<otpHistoryWhereUniqueInput>
  }

  export type userStatusCreateNestedOneWithoutUsersInput = {
    create?: XOR<userStatusCreateWithoutUsersInput, userStatusUncheckedCreateWithoutUsersInput>
    connectOrCreate?: userStatusCreateOrConnectWithoutUsersInput
    connect?: userStatusWhereUniqueInput
  }

  export type otpHistoryUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<otpHistoryCreateWithoutUserInput>, Enumerable<otpHistoryUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<otpHistoryCreateOrConnectWithoutUserInput>
    createMany?: otpHistoryCreateManyUserInputEnvelope
    connect?: Enumerable<otpHistoryWhereUniqueInput>
  }

  export type otpHistoryUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<otpHistoryCreateWithoutUserInput>, Enumerable<otpHistoryUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<otpHistoryCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<otpHistoryUpsertWithWhereUniqueWithoutUserInput>
    createMany?: otpHistoryCreateManyUserInputEnvelope
    set?: Enumerable<otpHistoryWhereUniqueInput>
    disconnect?: Enumerable<otpHistoryWhereUniqueInput>
    delete?: Enumerable<otpHistoryWhereUniqueInput>
    connect?: Enumerable<otpHistoryWhereUniqueInput>
    update?: Enumerable<otpHistoryUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<otpHistoryUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<otpHistoryScalarWhereInput>
  }

  export type userStatusUpdateOneRequiredWithoutUsersNestedInput = {
    create?: XOR<userStatusCreateWithoutUsersInput, userStatusUncheckedCreateWithoutUsersInput>
    connectOrCreate?: userStatusCreateOrConnectWithoutUsersInput
    upsert?: userStatusUpsertWithoutUsersInput
    connect?: userStatusWhereUniqueInput
    update?: XOR<userStatusUpdateWithoutUsersInput, userStatusUncheckedUpdateWithoutUsersInput>
  }

  export type otpHistoryUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<otpHistoryCreateWithoutUserInput>, Enumerable<otpHistoryUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<otpHistoryCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<otpHistoryUpsertWithWhereUniqueWithoutUserInput>
    createMany?: otpHistoryCreateManyUserInputEnvelope
    set?: Enumerable<otpHistoryWhereUniqueInput>
    disconnect?: Enumerable<otpHistoryWhereUniqueInput>
    delete?: Enumerable<otpHistoryWhereUniqueInput>
    connect?: Enumerable<otpHistoryWhereUniqueInput>
    update?: Enumerable<otpHistoryUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<otpHistoryUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<otpHistoryScalarWhereInput>
  }

  export type usersCreateNestedOneWithoutOtpHistoryInput = {
    create?: XOR<usersCreateWithoutOtpHistoryInput, usersUncheckedCreateWithoutOtpHistoryInput>
    connectOrCreate?: usersCreateOrConnectWithoutOtpHistoryInput
    connect?: usersWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type usersUpdateOneRequiredWithoutOtpHistoryNestedInput = {
    create?: XOR<usersCreateWithoutOtpHistoryInput, usersUncheckedCreateWithoutOtpHistoryInput>
    connectOrCreate?: usersCreateOrConnectWithoutOtpHistoryInput
    upsert?: usersUpsertWithoutOtpHistoryInput
    connect?: usersWhereUniqueInput
    update?: XOR<usersUpdateWithoutOtpHistoryInput, usersUncheckedUpdateWithoutOtpHistoryInput>
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string> | string
    notIn?: Enumerable<string> | string
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedDateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string> | Date | string
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string> | string
    notIn?: Enumerable<string> | string
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number> | number
    notIn?: Enumerable<number> | number
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedDateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string> | Date | string
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type NestedStringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | string | null
    notIn?: Enumerable<string> | string | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type NestedStringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | string | null
    notIn?: Enumerable<string> | string | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type NestedIntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | number | null
    notIn?: Enumerable<number> | number | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type usersCreateWithoutUser_statusInput = {
    id?: string
    phone: string
    created_at?: Date | string
    updated_at?: Date | string
    otpHistory?: otpHistoryCreateNestedManyWithoutUserInput
  }

  export type usersUncheckedCreateWithoutUser_statusInput = {
    id?: string
    phone: string
    created_at?: Date | string
    updated_at?: Date | string
    otpHistory?: otpHistoryUncheckedCreateNestedManyWithoutUserInput
  }

  export type usersCreateOrConnectWithoutUser_statusInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutUser_statusInput, usersUncheckedCreateWithoutUser_statusInput>
  }

  export type usersCreateManyUser_statusInputEnvelope = {
    data: Enumerable<usersCreateManyUser_statusInput>
    skipDuplicates?: boolean
  }

  export type usersUpsertWithWhereUniqueWithoutUser_statusInput = {
    where: usersWhereUniqueInput
    update: XOR<usersUpdateWithoutUser_statusInput, usersUncheckedUpdateWithoutUser_statusInput>
    create: XOR<usersCreateWithoutUser_statusInput, usersUncheckedCreateWithoutUser_statusInput>
  }

  export type usersUpdateWithWhereUniqueWithoutUser_statusInput = {
    where: usersWhereUniqueInput
    data: XOR<usersUpdateWithoutUser_statusInput, usersUncheckedUpdateWithoutUser_statusInput>
  }

  export type usersUpdateManyWithWhereWithoutUser_statusInput = {
    where: usersScalarWhereInput
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyWithoutUsersInput>
  }

  export type usersScalarWhereInput = {
    AND?: Enumerable<usersScalarWhereInput>
    OR?: Enumerable<usersScalarWhereInput>
    NOT?: Enumerable<usersScalarWhereInput>
    id?: StringFilter | string
    phone?: StringFilter | string
    created_at?: DateTimeFilter | Date | string
    updated_at?: DateTimeFilter | Date | string
    user_status_id?: StringFilter | string
  }

  export type otpHistoryCreateWithoutUserInput = {
    id?: string
    code?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type otpHistoryUncheckedCreateWithoutUserInput = {
    id?: string
    code?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type otpHistoryCreateOrConnectWithoutUserInput = {
    where: otpHistoryWhereUniqueInput
    create: XOR<otpHistoryCreateWithoutUserInput, otpHistoryUncheckedCreateWithoutUserInput>
  }

  export type otpHistoryCreateManyUserInputEnvelope = {
    data: Enumerable<otpHistoryCreateManyUserInput>
    skipDuplicates?: boolean
  }

  export type userStatusCreateWithoutUsersInput = {
    id?: string
    name: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type userStatusUncheckedCreateWithoutUsersInput = {
    id?: string
    name: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type userStatusCreateOrConnectWithoutUsersInput = {
    where: userStatusWhereUniqueInput
    create: XOR<userStatusCreateWithoutUsersInput, userStatusUncheckedCreateWithoutUsersInput>
  }

  export type otpHistoryUpsertWithWhereUniqueWithoutUserInput = {
    where: otpHistoryWhereUniqueInput
    update: XOR<otpHistoryUpdateWithoutUserInput, otpHistoryUncheckedUpdateWithoutUserInput>
    create: XOR<otpHistoryCreateWithoutUserInput, otpHistoryUncheckedCreateWithoutUserInput>
  }

  export type otpHistoryUpdateWithWhereUniqueWithoutUserInput = {
    where: otpHistoryWhereUniqueInput
    data: XOR<otpHistoryUpdateWithoutUserInput, otpHistoryUncheckedUpdateWithoutUserInput>
  }

  export type otpHistoryUpdateManyWithWhereWithoutUserInput = {
    where: otpHistoryScalarWhereInput
    data: XOR<otpHistoryUpdateManyMutationInput, otpHistoryUncheckedUpdateManyWithoutOtpHistoryInput>
  }

  export type otpHistoryScalarWhereInput = {
    AND?: Enumerable<otpHistoryScalarWhereInput>
    OR?: Enumerable<otpHistoryScalarWhereInput>
    NOT?: Enumerable<otpHistoryScalarWhereInput>
    id?: StringFilter | string
    code?: StringNullableFilter | string | null
    created_at?: DateTimeFilter | Date | string
    updated_at?: DateTimeFilter | Date | string
    user_id?: StringFilter | string
  }

  export type userStatusUpsertWithoutUsersInput = {
    update: XOR<userStatusUpdateWithoutUsersInput, userStatusUncheckedUpdateWithoutUsersInput>
    create: XOR<userStatusCreateWithoutUsersInput, userStatusUncheckedCreateWithoutUsersInput>
  }

  export type userStatusUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type userStatusUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type usersCreateWithoutOtpHistoryInput = {
    id?: string
    phone: string
    created_at?: Date | string
    updated_at?: Date | string
    user_status: userStatusCreateNestedOneWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutOtpHistoryInput = {
    id?: string
    phone: string
    created_at?: Date | string
    updated_at?: Date | string
    user_status_id: string
  }

  export type usersCreateOrConnectWithoutOtpHistoryInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutOtpHistoryInput, usersUncheckedCreateWithoutOtpHistoryInput>
  }

  export type usersUpsertWithoutOtpHistoryInput = {
    update: XOR<usersUpdateWithoutOtpHistoryInput, usersUncheckedUpdateWithoutOtpHistoryInput>
    create: XOR<usersCreateWithoutOtpHistoryInput, usersUncheckedCreateWithoutOtpHistoryInput>
  }

  export type usersUpdateWithoutOtpHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_status?: userStatusUpdateOneRequiredWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutOtpHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_status_id?: StringFieldUpdateOperationsInput | string
  }

  export type usersCreateManyUser_statusInput = {
    id?: string
    phone: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type usersUpdateWithoutUser_statusInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    otpHistory?: otpHistoryUpdateManyWithoutUserNestedInput
  }

  export type usersUncheckedUpdateWithoutUser_statusInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    otpHistory?: otpHistoryUncheckedUpdateManyWithoutUserNestedInput
  }

  export type usersUncheckedUpdateManyWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type otpHistoryCreateManyUserInput = {
    id?: string
    code?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type otpHistoryUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type otpHistoryUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type otpHistoryUncheckedUpdateManyWithoutOtpHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}