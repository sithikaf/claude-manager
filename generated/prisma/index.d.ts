
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Account
 * 
 */
export type Account = $Result.DefaultSelection<Prisma.$AccountPayload>
/**
 * Model Project
 * 
 */
export type Project = $Result.DefaultSelection<Prisma.$ProjectPayload>
/**
 * Model Agent
 * 
 */
export type Agent = $Result.DefaultSelection<Prisma.$AgentPayload>
/**
 * Model Skill
 * 
 */
export type Skill = $Result.DefaultSelection<Prisma.$SkillPayload>
/**
 * Model Command
 * 
 */
export type Command = $Result.DefaultSelection<Prisma.$CommandPayload>
/**
 * Model Plugin
 * 
 */
export type Plugin = $Result.DefaultSelection<Prisma.$PluginPayload>
/**
 * Model ScanStatus
 * 
 */
export type ScanStatus = $Result.DefaultSelection<Prisma.$ScanStatusPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Accounts
 * const accounts = await prisma.account.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Accounts
   * const accounts = await prisma.account.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.account`: Exposes CRUD operations for the **Account** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accounts
    * const accounts = await prisma.account.findMany()
    * ```
    */
  get account(): Prisma.AccountDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.project`: Exposes CRUD operations for the **Project** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Projects
    * const projects = await prisma.project.findMany()
    * ```
    */
  get project(): Prisma.ProjectDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.agent`: Exposes CRUD operations for the **Agent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Agents
    * const agents = await prisma.agent.findMany()
    * ```
    */
  get agent(): Prisma.AgentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.skill`: Exposes CRUD operations for the **Skill** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Skills
    * const skills = await prisma.skill.findMany()
    * ```
    */
  get skill(): Prisma.SkillDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.command`: Exposes CRUD operations for the **Command** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Commands
    * const commands = await prisma.command.findMany()
    * ```
    */
  get command(): Prisma.CommandDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.plugin`: Exposes CRUD operations for the **Plugin** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Plugins
    * const plugins = await prisma.plugin.findMany()
    * ```
    */
  get plugin(): Prisma.PluginDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.scanStatus`: Exposes CRUD operations for the **ScanStatus** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ScanStatuses
    * const scanStatuses = await prisma.scanStatus.findMany()
    * ```
    */
  get scanStatus(): Prisma.ScanStatusDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.19.2
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

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
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Account: 'Account',
    Project: 'Project',
    Agent: 'Agent',
    Skill: 'Skill',
    Command: 'Command',
    Plugin: 'Plugin',
    ScanStatus: 'ScanStatus'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "account" | "project" | "agent" | "skill" | "command" | "plugin" | "scanStatus"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Account: {
        payload: Prisma.$AccountPayload<ExtArgs>
        fields: Prisma.AccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AccountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findFirst: {
            args: Prisma.AccountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findMany: {
            args: Prisma.AccountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          create: {
            args: Prisma.AccountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          createMany: {
            args: Prisma.AccountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AccountCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          delete: {
            args: Prisma.AccountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          update: {
            args: Prisma.AccountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          deleteMany: {
            args: Prisma.AccountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AccountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AccountUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          upsert: {
            args: Prisma.AccountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          aggregate: {
            args: Prisma.AccountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccount>
          }
          groupBy: {
            args: Prisma.AccountGroupByArgs<ExtArgs>
            result: $Utils.Optional<AccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.AccountCountArgs<ExtArgs>
            result: $Utils.Optional<AccountCountAggregateOutputType> | number
          }
        }
      }
      Project: {
        payload: Prisma.$ProjectPayload<ExtArgs>
        fields: Prisma.ProjectFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProjectFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProjectFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          findFirst: {
            args: Prisma.ProjectFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProjectFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          findMany: {
            args: Prisma.ProjectFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          create: {
            args: Prisma.ProjectCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          createMany: {
            args: Prisma.ProjectCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProjectCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          delete: {
            args: Prisma.ProjectDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          update: {
            args: Prisma.ProjectUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          deleteMany: {
            args: Prisma.ProjectDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProjectUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProjectUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          upsert: {
            args: Prisma.ProjectUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          aggregate: {
            args: Prisma.ProjectAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProject>
          }
          groupBy: {
            args: Prisma.ProjectGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjectGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProjectCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectCountAggregateOutputType> | number
          }
        }
      }
      Agent: {
        payload: Prisma.$AgentPayload<ExtArgs>
        fields: Prisma.AgentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AgentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AgentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentPayload>
          }
          findFirst: {
            args: Prisma.AgentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AgentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentPayload>
          }
          findMany: {
            args: Prisma.AgentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentPayload>[]
          }
          create: {
            args: Prisma.AgentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentPayload>
          }
          createMany: {
            args: Prisma.AgentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AgentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentPayload>[]
          }
          delete: {
            args: Prisma.AgentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentPayload>
          }
          update: {
            args: Prisma.AgentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentPayload>
          }
          deleteMany: {
            args: Prisma.AgentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AgentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AgentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentPayload>[]
          }
          upsert: {
            args: Prisma.AgentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentPayload>
          }
          aggregate: {
            args: Prisma.AgentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAgent>
          }
          groupBy: {
            args: Prisma.AgentGroupByArgs<ExtArgs>
            result: $Utils.Optional<AgentGroupByOutputType>[]
          }
          count: {
            args: Prisma.AgentCountArgs<ExtArgs>
            result: $Utils.Optional<AgentCountAggregateOutputType> | number
          }
        }
      }
      Skill: {
        payload: Prisma.$SkillPayload<ExtArgs>
        fields: Prisma.SkillFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SkillFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SkillFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>
          }
          findFirst: {
            args: Prisma.SkillFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SkillFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>
          }
          findMany: {
            args: Prisma.SkillFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>[]
          }
          create: {
            args: Prisma.SkillCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>
          }
          createMany: {
            args: Prisma.SkillCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SkillCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>[]
          }
          delete: {
            args: Prisma.SkillDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>
          }
          update: {
            args: Prisma.SkillUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>
          }
          deleteMany: {
            args: Prisma.SkillDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SkillUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SkillUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>[]
          }
          upsert: {
            args: Prisma.SkillUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>
          }
          aggregate: {
            args: Prisma.SkillAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSkill>
          }
          groupBy: {
            args: Prisma.SkillGroupByArgs<ExtArgs>
            result: $Utils.Optional<SkillGroupByOutputType>[]
          }
          count: {
            args: Prisma.SkillCountArgs<ExtArgs>
            result: $Utils.Optional<SkillCountAggregateOutputType> | number
          }
        }
      }
      Command: {
        payload: Prisma.$CommandPayload<ExtArgs>
        fields: Prisma.CommandFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CommandFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommandPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CommandFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommandPayload>
          }
          findFirst: {
            args: Prisma.CommandFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommandPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CommandFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommandPayload>
          }
          findMany: {
            args: Prisma.CommandFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommandPayload>[]
          }
          create: {
            args: Prisma.CommandCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommandPayload>
          }
          createMany: {
            args: Prisma.CommandCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CommandCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommandPayload>[]
          }
          delete: {
            args: Prisma.CommandDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommandPayload>
          }
          update: {
            args: Prisma.CommandUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommandPayload>
          }
          deleteMany: {
            args: Prisma.CommandDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CommandUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CommandUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommandPayload>[]
          }
          upsert: {
            args: Prisma.CommandUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommandPayload>
          }
          aggregate: {
            args: Prisma.CommandAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCommand>
          }
          groupBy: {
            args: Prisma.CommandGroupByArgs<ExtArgs>
            result: $Utils.Optional<CommandGroupByOutputType>[]
          }
          count: {
            args: Prisma.CommandCountArgs<ExtArgs>
            result: $Utils.Optional<CommandCountAggregateOutputType> | number
          }
        }
      }
      Plugin: {
        payload: Prisma.$PluginPayload<ExtArgs>
        fields: Prisma.PluginFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PluginFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PluginPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PluginFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PluginPayload>
          }
          findFirst: {
            args: Prisma.PluginFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PluginPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PluginFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PluginPayload>
          }
          findMany: {
            args: Prisma.PluginFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PluginPayload>[]
          }
          create: {
            args: Prisma.PluginCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PluginPayload>
          }
          createMany: {
            args: Prisma.PluginCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PluginCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PluginPayload>[]
          }
          delete: {
            args: Prisma.PluginDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PluginPayload>
          }
          update: {
            args: Prisma.PluginUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PluginPayload>
          }
          deleteMany: {
            args: Prisma.PluginDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PluginUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PluginUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PluginPayload>[]
          }
          upsert: {
            args: Prisma.PluginUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PluginPayload>
          }
          aggregate: {
            args: Prisma.PluginAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePlugin>
          }
          groupBy: {
            args: Prisma.PluginGroupByArgs<ExtArgs>
            result: $Utils.Optional<PluginGroupByOutputType>[]
          }
          count: {
            args: Prisma.PluginCountArgs<ExtArgs>
            result: $Utils.Optional<PluginCountAggregateOutputType> | number
          }
        }
      }
      ScanStatus: {
        payload: Prisma.$ScanStatusPayload<ExtArgs>
        fields: Prisma.ScanStatusFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ScanStatusFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScanStatusPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ScanStatusFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScanStatusPayload>
          }
          findFirst: {
            args: Prisma.ScanStatusFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScanStatusPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ScanStatusFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScanStatusPayload>
          }
          findMany: {
            args: Prisma.ScanStatusFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScanStatusPayload>[]
          }
          create: {
            args: Prisma.ScanStatusCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScanStatusPayload>
          }
          createMany: {
            args: Prisma.ScanStatusCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ScanStatusCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScanStatusPayload>[]
          }
          delete: {
            args: Prisma.ScanStatusDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScanStatusPayload>
          }
          update: {
            args: Prisma.ScanStatusUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScanStatusPayload>
          }
          deleteMany: {
            args: Prisma.ScanStatusDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ScanStatusUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ScanStatusUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScanStatusPayload>[]
          }
          upsert: {
            args: Prisma.ScanStatusUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScanStatusPayload>
          }
          aggregate: {
            args: Prisma.ScanStatusAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateScanStatus>
          }
          groupBy: {
            args: Prisma.ScanStatusGroupByArgs<ExtArgs>
            result: $Utils.Optional<ScanStatusGroupByOutputType>[]
          }
          count: {
            args: Prisma.ScanStatusCountArgs<ExtArgs>
            result: $Utils.Optional<ScanStatusCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    account?: AccountOmit
    project?: ProjectOmit
    agent?: AgentOmit
    skill?: SkillOmit
    command?: CommandOmit
    plugin?: PluginOmit
    scanStatus?: ScanStatusOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type AccountCountOutputType
   */

  export type AccountCountOutputType = {
    agents: number
    skills: number
    commands: number
    plugins: number
  }

  export type AccountCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    agents?: boolean | AccountCountOutputTypeCountAgentsArgs
    skills?: boolean | AccountCountOutputTypeCountSkillsArgs
    commands?: boolean | AccountCountOutputTypeCountCommandsArgs
    plugins?: boolean | AccountCountOutputTypeCountPluginsArgs
  }

  // Custom InputTypes
  /**
   * AccountCountOutputType without action
   */
  export type AccountCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountCountOutputType
     */
    select?: AccountCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AccountCountOutputType without action
   */
  export type AccountCountOutputTypeCountAgentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AgentWhereInput
  }

  /**
   * AccountCountOutputType without action
   */
  export type AccountCountOutputTypeCountSkillsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SkillWhereInput
  }

  /**
   * AccountCountOutputType without action
   */
  export type AccountCountOutputTypeCountCommandsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommandWhereInput
  }

  /**
   * AccountCountOutputType without action
   */
  export type AccountCountOutputTypeCountPluginsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PluginWhereInput
  }


  /**
   * Count Type ProjectCountOutputType
   */

  export type ProjectCountOutputType = {
    commands: number
  }

  export type ProjectCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    commands?: boolean | ProjectCountOutputTypeCountCommandsArgs
  }

  // Custom InputTypes
  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectCountOutputType
     */
    select?: ProjectCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountCommandsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommandWhereInput
  }


  /**
   * Count Type PluginCountOutputType
   */

  export type PluginCountOutputType = {
    agents: number
    skills: number
    commands: number
  }

  export type PluginCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    agents?: boolean | PluginCountOutputTypeCountAgentsArgs
    skills?: boolean | PluginCountOutputTypeCountSkillsArgs
    commands?: boolean | PluginCountOutputTypeCountCommandsArgs
  }

  // Custom InputTypes
  /**
   * PluginCountOutputType without action
   */
  export type PluginCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PluginCountOutputType
     */
    select?: PluginCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PluginCountOutputType without action
   */
  export type PluginCountOutputTypeCountAgentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AgentWhereInput
  }

  /**
   * PluginCountOutputType without action
   */
  export type PluginCountOutputTypeCountSkillsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SkillWhereInput
  }

  /**
   * PluginCountOutputType without action
   */
  export type PluginCountOutputTypeCountCommandsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommandWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Account
   */

  export type AggregateAccount = {
    _count: AccountCountAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  export type AccountMinAggregateOutputType = {
    id: string | null
    name: string | null
    dirPath: string | null
  }

  export type AccountMaxAggregateOutputType = {
    id: string | null
    name: string | null
    dirPath: string | null
  }

  export type AccountCountAggregateOutputType = {
    id: number
    name: number
    dirPath: number
    _all: number
  }


  export type AccountMinAggregateInputType = {
    id?: true
    name?: true
    dirPath?: true
  }

  export type AccountMaxAggregateInputType = {
    id?: true
    name?: true
    dirPath?: true
  }

  export type AccountCountAggregateInputType = {
    id?: true
    name?: true
    dirPath?: true
    _all?: true
  }

  export type AccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Account to aggregate.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Accounts
    **/
    _count?: true | AccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountMaxAggregateInputType
  }

  export type GetAccountAggregateType<T extends AccountAggregateArgs> = {
        [P in keyof T & keyof AggregateAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccount[P]>
      : GetScalarType<T[P], AggregateAccount[P]>
  }




  export type AccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithAggregationInput | AccountOrderByWithAggregationInput[]
    by: AccountScalarFieldEnum[] | AccountScalarFieldEnum
    having?: AccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountCountAggregateInputType | true
    _min?: AccountMinAggregateInputType
    _max?: AccountMaxAggregateInputType
  }

  export type AccountGroupByOutputType = {
    id: string
    name: string
    dirPath: string
    _count: AccountCountAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  type GetAccountGroupByPayload<T extends AccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountGroupByOutputType[P]>
            : GetScalarType<T[P], AccountGroupByOutputType[P]>
        }
      >
    >


  export type AccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    dirPath?: boolean
    agents?: boolean | Account$agentsArgs<ExtArgs>
    skills?: boolean | Account$skillsArgs<ExtArgs>
    commands?: boolean | Account$commandsArgs<ExtArgs>
    plugins?: boolean | Account$pluginsArgs<ExtArgs>
    _count?: boolean | AccountCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    dirPath?: boolean
  }, ExtArgs["result"]["account"]>

  export type AccountSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    dirPath?: boolean
  }, ExtArgs["result"]["account"]>

  export type AccountSelectScalar = {
    id?: boolean
    name?: boolean
    dirPath?: boolean
  }

  export type AccountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "dirPath", ExtArgs["result"]["account"]>
  export type AccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    agents?: boolean | Account$agentsArgs<ExtArgs>
    skills?: boolean | Account$skillsArgs<ExtArgs>
    commands?: boolean | Account$commandsArgs<ExtArgs>
    plugins?: boolean | Account$pluginsArgs<ExtArgs>
    _count?: boolean | AccountCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AccountIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type AccountIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $AccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Account"
    objects: {
      agents: Prisma.$AgentPayload<ExtArgs>[]
      skills: Prisma.$SkillPayload<ExtArgs>[]
      commands: Prisma.$CommandPayload<ExtArgs>[]
      plugins: Prisma.$PluginPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      dirPath: string
    }, ExtArgs["result"]["account"]>
    composites: {}
  }

  type AccountGetPayload<S extends boolean | null | undefined | AccountDefaultArgs> = $Result.GetResult<Prisma.$AccountPayload, S>

  type AccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AccountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AccountCountAggregateInputType | true
    }

  export interface AccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Account'], meta: { name: 'Account' } }
    /**
     * Find zero or one Account that matches the filter.
     * @param {AccountFindUniqueArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AccountFindUniqueArgs>(args: SelectSubset<T, AccountFindUniqueArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Account that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AccountFindUniqueOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AccountFindUniqueOrThrowArgs>(args: SelectSubset<T, AccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AccountFindFirstArgs>(args?: SelectSubset<T, AccountFindFirstArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AccountFindFirstOrThrowArgs>(args?: SelectSubset<T, AccountFindFirstOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accounts
     * const accounts = await prisma.account.findMany()
     * 
     * // Get first 10 Accounts
     * const accounts = await prisma.account.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accountWithIdOnly = await prisma.account.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AccountFindManyArgs>(args?: SelectSubset<T, AccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Account.
     * @param {AccountCreateArgs} args - Arguments to create a Account.
     * @example
     * // Create one Account
     * const Account = await prisma.account.create({
     *   data: {
     *     // ... data to create a Account
     *   }
     * })
     * 
     */
    create<T extends AccountCreateArgs>(args: SelectSubset<T, AccountCreateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Accounts.
     * @param {AccountCreateManyArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AccountCreateManyArgs>(args?: SelectSubset<T, AccountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Accounts and returns the data saved in the database.
     * @param {AccountCreateManyAndReturnArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AccountCreateManyAndReturnArgs>(args?: SelectSubset<T, AccountCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Account.
     * @param {AccountDeleteArgs} args - Arguments to delete one Account.
     * @example
     * // Delete one Account
     * const Account = await prisma.account.delete({
     *   where: {
     *     // ... filter to delete one Account
     *   }
     * })
     * 
     */
    delete<T extends AccountDeleteArgs>(args: SelectSubset<T, AccountDeleteArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Account.
     * @param {AccountUpdateArgs} args - Arguments to update one Account.
     * @example
     * // Update one Account
     * const account = await prisma.account.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AccountUpdateArgs>(args: SelectSubset<T, AccountUpdateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Accounts.
     * @param {AccountDeleteManyArgs} args - Arguments to filter Accounts to delete.
     * @example
     * // Delete a few Accounts
     * const { count } = await prisma.account.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AccountDeleteManyArgs>(args?: SelectSubset<T, AccountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AccountUpdateManyArgs>(args: SelectSubset<T, AccountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts and returns the data updated in the database.
     * @param {AccountUpdateManyAndReturnArgs} args - Arguments to update many Accounts.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AccountUpdateManyAndReturnArgs>(args: SelectSubset<T, AccountUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Account.
     * @param {AccountUpsertArgs} args - Arguments to update or create a Account.
     * @example
     * // Update or create a Account
     * const account = await prisma.account.upsert({
     *   create: {
     *     // ... data to create a Account
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Account we want to update
     *   }
     * })
     */
    upsert<T extends AccountUpsertArgs>(args: SelectSubset<T, AccountUpsertArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountCountArgs} args - Arguments to filter Accounts to count.
     * @example
     * // Count the number of Accounts
     * const count = await prisma.account.count({
     *   where: {
     *     // ... the filter for the Accounts we want to count
     *   }
     * })
    **/
    count<T extends AccountCountArgs>(
      args?: Subset<T, AccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AccountAggregateArgs>(args: Subset<T, AccountAggregateArgs>): Prisma.PrismaPromise<GetAccountAggregateType<T>>

    /**
     * Group by Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountGroupByArgs} args - Group by arguments.
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
      T extends AccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccountGroupByArgs['orderBy'] }
        : { orderBy?: AccountGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, AccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Account model
   */
  readonly fields: AccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Account.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    agents<T extends Account$agentsArgs<ExtArgs> = {}>(args?: Subset<T, Account$agentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AgentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    skills<T extends Account$skillsArgs<ExtArgs> = {}>(args?: Subset<T, Account$skillsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    commands<T extends Account$commandsArgs<ExtArgs> = {}>(args?: Subset<T, Account$commandsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommandPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    plugins<T extends Account$pluginsArgs<ExtArgs> = {}>(args?: Subset<T, Account$pluginsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PluginPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Account model
   */
  interface AccountFieldRefs {
    readonly id: FieldRef<"Account", 'String'>
    readonly name: FieldRef<"Account", 'String'>
    readonly dirPath: FieldRef<"Account", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Account findUnique
   */
  export type AccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findUniqueOrThrow
   */
  export type AccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findFirst
   */
  export type AccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findFirstOrThrow
   */
  export type AccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findMany
   */
  export type AccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Accounts to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account create
   */
  export type AccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to create a Account.
     */
    data: XOR<AccountCreateInput, AccountUncheckedCreateInput>
  }

  /**
   * Account createMany
   */
  export type AccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Account createManyAndReturn
   */
  export type AccountCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Account update
   */
  export type AccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to update a Account.
     */
    data: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
    /**
     * Choose, which Account to update.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account updateMany
   */
  export type AccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
  }

  /**
   * Account updateManyAndReturn
   */
  export type AccountUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
  }

  /**
   * Account upsert
   */
  export type AccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The filter to search for the Account to update in case it exists.
     */
    where: AccountWhereUniqueInput
    /**
     * In case the Account found by the `where` argument doesn't exist, create a new Account with this data.
     */
    create: XOR<AccountCreateInput, AccountUncheckedCreateInput>
    /**
     * In case the Account was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
  }

  /**
   * Account delete
   */
  export type AccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter which Account to delete.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account deleteMany
   */
  export type AccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Accounts to delete
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to delete.
     */
    limit?: number
  }

  /**
   * Account.agents
   */
  export type Account$agentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agent
     */
    select?: AgentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agent
     */
    omit?: AgentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentInclude<ExtArgs> | null
    where?: AgentWhereInput
    orderBy?: AgentOrderByWithRelationInput | AgentOrderByWithRelationInput[]
    cursor?: AgentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AgentScalarFieldEnum | AgentScalarFieldEnum[]
  }

  /**
   * Account.skills
   */
  export type Account$skillsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    where?: SkillWhereInput
    orderBy?: SkillOrderByWithRelationInput | SkillOrderByWithRelationInput[]
    cursor?: SkillWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SkillScalarFieldEnum | SkillScalarFieldEnum[]
  }

  /**
   * Account.commands
   */
  export type Account$commandsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Command
     */
    select?: CommandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Command
     */
    omit?: CommandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommandInclude<ExtArgs> | null
    where?: CommandWhereInput
    orderBy?: CommandOrderByWithRelationInput | CommandOrderByWithRelationInput[]
    cursor?: CommandWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommandScalarFieldEnum | CommandScalarFieldEnum[]
  }

  /**
   * Account.plugins
   */
  export type Account$pluginsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plugin
     */
    select?: PluginSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plugin
     */
    omit?: PluginOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PluginInclude<ExtArgs> | null
    where?: PluginWhereInput
    orderBy?: PluginOrderByWithRelationInput | PluginOrderByWithRelationInput[]
    cursor?: PluginWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PluginScalarFieldEnum | PluginScalarFieldEnum[]
  }

  /**
   * Account without action
   */
  export type AccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
  }


  /**
   * Model Project
   */

  export type AggregateProject = {
    _count: ProjectCountAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  export type ProjectMinAggregateOutputType = {
    id: string | null
    name: string | null
    dirPath: string | null
  }

  export type ProjectMaxAggregateOutputType = {
    id: string | null
    name: string | null
    dirPath: string | null
  }

  export type ProjectCountAggregateOutputType = {
    id: number
    name: number
    dirPath: number
    _all: number
  }


  export type ProjectMinAggregateInputType = {
    id?: true
    name?: true
    dirPath?: true
  }

  export type ProjectMaxAggregateInputType = {
    id?: true
    name?: true
    dirPath?: true
  }

  export type ProjectCountAggregateInputType = {
    id?: true
    name?: true
    dirPath?: true
    _all?: true
  }

  export type ProjectAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Project to aggregate.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Projects
    **/
    _count?: true | ProjectCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectMaxAggregateInputType
  }

  export type GetProjectAggregateType<T extends ProjectAggregateArgs> = {
        [P in keyof T & keyof AggregateProject]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProject[P]>
      : GetScalarType<T[P], AggregateProject[P]>
  }




  export type ProjectGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectWhereInput
    orderBy?: ProjectOrderByWithAggregationInput | ProjectOrderByWithAggregationInput[]
    by: ProjectScalarFieldEnum[] | ProjectScalarFieldEnum
    having?: ProjectScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectCountAggregateInputType | true
    _min?: ProjectMinAggregateInputType
    _max?: ProjectMaxAggregateInputType
  }

  export type ProjectGroupByOutputType = {
    id: string
    name: string
    dirPath: string
    _count: ProjectCountAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  type GetProjectGroupByPayload<T extends ProjectGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectGroupByOutputType[P]>
        }
      >
    >


  export type ProjectSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    dirPath?: boolean
    commands?: boolean | Project$commandsArgs<ExtArgs>
    _count?: boolean | ProjectCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    dirPath?: boolean
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    dirPath?: boolean
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectScalar = {
    id?: boolean
    name?: boolean
    dirPath?: boolean
  }

  export type ProjectOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "dirPath", ExtArgs["result"]["project"]>
  export type ProjectInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    commands?: boolean | Project$commandsArgs<ExtArgs>
    _count?: boolean | ProjectCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProjectIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ProjectIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ProjectPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Project"
    objects: {
      commands: Prisma.$CommandPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      dirPath: string
    }, ExtArgs["result"]["project"]>
    composites: {}
  }

  type ProjectGetPayload<S extends boolean | null | undefined | ProjectDefaultArgs> = $Result.GetResult<Prisma.$ProjectPayload, S>

  type ProjectCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProjectFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProjectCountAggregateInputType | true
    }

  export interface ProjectDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Project'], meta: { name: 'Project' } }
    /**
     * Find zero or one Project that matches the filter.
     * @param {ProjectFindUniqueArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProjectFindUniqueArgs>(args: SelectSubset<T, ProjectFindUniqueArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Project that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProjectFindUniqueOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProjectFindUniqueOrThrowArgs>(args: SelectSubset<T, ProjectFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Project that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProjectFindFirstArgs>(args?: SelectSubset<T, ProjectFindFirstArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Project that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProjectFindFirstOrThrowArgs>(args?: SelectSubset<T, ProjectFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Projects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Projects
     * const projects = await prisma.project.findMany()
     * 
     * // Get first 10 Projects
     * const projects = await prisma.project.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const projectWithIdOnly = await prisma.project.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProjectFindManyArgs>(args?: SelectSubset<T, ProjectFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Project.
     * @param {ProjectCreateArgs} args - Arguments to create a Project.
     * @example
     * // Create one Project
     * const Project = await prisma.project.create({
     *   data: {
     *     // ... data to create a Project
     *   }
     * })
     * 
     */
    create<T extends ProjectCreateArgs>(args: SelectSubset<T, ProjectCreateArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Projects.
     * @param {ProjectCreateManyArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const project = await prisma.project.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProjectCreateManyArgs>(args?: SelectSubset<T, ProjectCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Projects and returns the data saved in the database.
     * @param {ProjectCreateManyAndReturnArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const project = await prisma.project.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Projects and only return the `id`
     * const projectWithIdOnly = await prisma.project.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProjectCreateManyAndReturnArgs>(args?: SelectSubset<T, ProjectCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Project.
     * @param {ProjectDeleteArgs} args - Arguments to delete one Project.
     * @example
     * // Delete one Project
     * const Project = await prisma.project.delete({
     *   where: {
     *     // ... filter to delete one Project
     *   }
     * })
     * 
     */
    delete<T extends ProjectDeleteArgs>(args: SelectSubset<T, ProjectDeleteArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Project.
     * @param {ProjectUpdateArgs} args - Arguments to update one Project.
     * @example
     * // Update one Project
     * const project = await prisma.project.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProjectUpdateArgs>(args: SelectSubset<T, ProjectUpdateArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Projects.
     * @param {ProjectDeleteManyArgs} args - Arguments to filter Projects to delete.
     * @example
     * // Delete a few Projects
     * const { count } = await prisma.project.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProjectDeleteManyArgs>(args?: SelectSubset<T, ProjectDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Projects
     * const project = await prisma.project.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProjectUpdateManyArgs>(args: SelectSubset<T, ProjectUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects and returns the data updated in the database.
     * @param {ProjectUpdateManyAndReturnArgs} args - Arguments to update many Projects.
     * @example
     * // Update many Projects
     * const project = await prisma.project.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Projects and only return the `id`
     * const projectWithIdOnly = await prisma.project.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProjectUpdateManyAndReturnArgs>(args: SelectSubset<T, ProjectUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Project.
     * @param {ProjectUpsertArgs} args - Arguments to update or create a Project.
     * @example
     * // Update or create a Project
     * const project = await prisma.project.upsert({
     *   create: {
     *     // ... data to create a Project
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Project we want to update
     *   }
     * })
     */
    upsert<T extends ProjectUpsertArgs>(args: SelectSubset<T, ProjectUpsertArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectCountArgs} args - Arguments to filter Projects to count.
     * @example
     * // Count the number of Projects
     * const count = await prisma.project.count({
     *   where: {
     *     // ... the filter for the Projects we want to count
     *   }
     * })
    **/
    count<T extends ProjectCountArgs>(
      args?: Subset<T, ProjectCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProjectAggregateArgs>(args: Subset<T, ProjectAggregateArgs>): Prisma.PrismaPromise<GetProjectAggregateType<T>>

    /**
     * Group by Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectGroupByArgs} args - Group by arguments.
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
      T extends ProjectGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjectGroupByArgs['orderBy'] }
        : { orderBy?: ProjectGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, ProjectGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Project model
   */
  readonly fields: ProjectFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Project.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProjectClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    commands<T extends Project$commandsArgs<ExtArgs> = {}>(args?: Subset<T, Project$commandsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommandPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Project model
   */
  interface ProjectFieldRefs {
    readonly id: FieldRef<"Project", 'String'>
    readonly name: FieldRef<"Project", 'String'>
    readonly dirPath: FieldRef<"Project", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Project findUnique
   */
  export type ProjectFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project findUniqueOrThrow
   */
  export type ProjectFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project findFirst
   */
  export type ProjectFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project findFirstOrThrow
   */
  export type ProjectFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project findMany
   */
  export type ProjectFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Projects to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project create
   */
  export type ProjectCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The data needed to create a Project.
     */
    data: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
  }

  /**
   * Project createMany
   */
  export type ProjectCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Projects.
     */
    data: ProjectCreateManyInput | ProjectCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Project createManyAndReturn
   */
  export type ProjectCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * The data used to create many Projects.
     */
    data: ProjectCreateManyInput | ProjectCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Project update
   */
  export type ProjectUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The data needed to update a Project.
     */
    data: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
    /**
     * Choose, which Project to update.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project updateMany
   */
  export type ProjectUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Projects.
     */
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyInput>
    /**
     * Filter which Projects to update
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to update.
     */
    limit?: number
  }

  /**
   * Project updateManyAndReturn
   */
  export type ProjectUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * The data used to update Projects.
     */
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyInput>
    /**
     * Filter which Projects to update
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to update.
     */
    limit?: number
  }

  /**
   * Project upsert
   */
  export type ProjectUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The filter to search for the Project to update in case it exists.
     */
    where: ProjectWhereUniqueInput
    /**
     * In case the Project found by the `where` argument doesn't exist, create a new Project with this data.
     */
    create: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
    /**
     * In case the Project was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
  }

  /**
   * Project delete
   */
  export type ProjectDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter which Project to delete.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project deleteMany
   */
  export type ProjectDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Projects to delete
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to delete.
     */
    limit?: number
  }

  /**
   * Project.commands
   */
  export type Project$commandsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Command
     */
    select?: CommandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Command
     */
    omit?: CommandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommandInclude<ExtArgs> | null
    where?: CommandWhereInput
    orderBy?: CommandOrderByWithRelationInput | CommandOrderByWithRelationInput[]
    cursor?: CommandWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommandScalarFieldEnum | CommandScalarFieldEnum[]
  }

  /**
   * Project without action
   */
  export type ProjectDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
  }


  /**
   * Model Agent
   */

  export type AggregateAgent = {
    _count: AgentCountAggregateOutputType | null
    _min: AgentMinAggregateOutputType | null
    _max: AgentMaxAggregateOutputType | null
  }

  export type AgentMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    tools: string | null
    model: string | null
    color: string | null
    filePath: string | null
    content: string | null
    source: string | null
    accountId: string | null
    pluginId: string | null
  }

  export type AgentMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    tools: string | null
    model: string | null
    color: string | null
    filePath: string | null
    content: string | null
    source: string | null
    accountId: string | null
    pluginId: string | null
  }

  export type AgentCountAggregateOutputType = {
    id: number
    name: number
    description: number
    tools: number
    model: number
    color: number
    filePath: number
    content: number
    source: number
    accountId: number
    pluginId: number
    _all: number
  }


  export type AgentMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    tools?: true
    model?: true
    color?: true
    filePath?: true
    content?: true
    source?: true
    accountId?: true
    pluginId?: true
  }

  export type AgentMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    tools?: true
    model?: true
    color?: true
    filePath?: true
    content?: true
    source?: true
    accountId?: true
    pluginId?: true
  }

  export type AgentCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    tools?: true
    model?: true
    color?: true
    filePath?: true
    content?: true
    source?: true
    accountId?: true
    pluginId?: true
    _all?: true
  }

  export type AgentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Agent to aggregate.
     */
    where?: AgentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Agents to fetch.
     */
    orderBy?: AgentOrderByWithRelationInput | AgentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AgentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Agents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Agents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Agents
    **/
    _count?: true | AgentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AgentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AgentMaxAggregateInputType
  }

  export type GetAgentAggregateType<T extends AgentAggregateArgs> = {
        [P in keyof T & keyof AggregateAgent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAgent[P]>
      : GetScalarType<T[P], AggregateAgent[P]>
  }




  export type AgentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AgentWhereInput
    orderBy?: AgentOrderByWithAggregationInput | AgentOrderByWithAggregationInput[]
    by: AgentScalarFieldEnum[] | AgentScalarFieldEnum
    having?: AgentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AgentCountAggregateInputType | true
    _min?: AgentMinAggregateInputType
    _max?: AgentMaxAggregateInputType
  }

  export type AgentGroupByOutputType = {
    id: string
    name: string
    description: string | null
    tools: string | null
    model: string | null
    color: string | null
    filePath: string
    content: string
    source: string
    accountId: string
    pluginId: string | null
    _count: AgentCountAggregateOutputType | null
    _min: AgentMinAggregateOutputType | null
    _max: AgentMaxAggregateOutputType | null
  }

  type GetAgentGroupByPayload<T extends AgentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AgentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AgentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AgentGroupByOutputType[P]>
            : GetScalarType<T[P], AgentGroupByOutputType[P]>
        }
      >
    >


  export type AgentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    tools?: boolean
    model?: boolean
    color?: boolean
    filePath?: boolean
    content?: boolean
    source?: boolean
    accountId?: boolean
    pluginId?: boolean
    account?: boolean | AccountDefaultArgs<ExtArgs>
    plugin?: boolean | Agent$pluginArgs<ExtArgs>
  }, ExtArgs["result"]["agent"]>

  export type AgentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    tools?: boolean
    model?: boolean
    color?: boolean
    filePath?: boolean
    content?: boolean
    source?: boolean
    accountId?: boolean
    pluginId?: boolean
    account?: boolean | AccountDefaultArgs<ExtArgs>
    plugin?: boolean | Agent$pluginArgs<ExtArgs>
  }, ExtArgs["result"]["agent"]>

  export type AgentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    tools?: boolean
    model?: boolean
    color?: boolean
    filePath?: boolean
    content?: boolean
    source?: boolean
    accountId?: boolean
    pluginId?: boolean
    account?: boolean | AccountDefaultArgs<ExtArgs>
    plugin?: boolean | Agent$pluginArgs<ExtArgs>
  }, ExtArgs["result"]["agent"]>

  export type AgentSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    tools?: boolean
    model?: boolean
    color?: boolean
    filePath?: boolean
    content?: boolean
    source?: boolean
    accountId?: boolean
    pluginId?: boolean
  }

  export type AgentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "tools" | "model" | "color" | "filePath" | "content" | "source" | "accountId" | "pluginId", ExtArgs["result"]["agent"]>
  export type AgentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    account?: boolean | AccountDefaultArgs<ExtArgs>
    plugin?: boolean | Agent$pluginArgs<ExtArgs>
  }
  export type AgentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    account?: boolean | AccountDefaultArgs<ExtArgs>
    plugin?: boolean | Agent$pluginArgs<ExtArgs>
  }
  export type AgentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    account?: boolean | AccountDefaultArgs<ExtArgs>
    plugin?: boolean | Agent$pluginArgs<ExtArgs>
  }

  export type $AgentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Agent"
    objects: {
      account: Prisma.$AccountPayload<ExtArgs>
      plugin: Prisma.$PluginPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      tools: string | null
      model: string | null
      color: string | null
      filePath: string
      content: string
      source: string
      accountId: string
      pluginId: string | null
    }, ExtArgs["result"]["agent"]>
    composites: {}
  }

  type AgentGetPayload<S extends boolean | null | undefined | AgentDefaultArgs> = $Result.GetResult<Prisma.$AgentPayload, S>

  type AgentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AgentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AgentCountAggregateInputType | true
    }

  export interface AgentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Agent'], meta: { name: 'Agent' } }
    /**
     * Find zero or one Agent that matches the filter.
     * @param {AgentFindUniqueArgs} args - Arguments to find a Agent
     * @example
     * // Get one Agent
     * const agent = await prisma.agent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AgentFindUniqueArgs>(args: SelectSubset<T, AgentFindUniqueArgs<ExtArgs>>): Prisma__AgentClient<$Result.GetResult<Prisma.$AgentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Agent that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AgentFindUniqueOrThrowArgs} args - Arguments to find a Agent
     * @example
     * // Get one Agent
     * const agent = await prisma.agent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AgentFindUniqueOrThrowArgs>(args: SelectSubset<T, AgentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AgentClient<$Result.GetResult<Prisma.$AgentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Agent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgentFindFirstArgs} args - Arguments to find a Agent
     * @example
     * // Get one Agent
     * const agent = await prisma.agent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AgentFindFirstArgs>(args?: SelectSubset<T, AgentFindFirstArgs<ExtArgs>>): Prisma__AgentClient<$Result.GetResult<Prisma.$AgentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Agent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgentFindFirstOrThrowArgs} args - Arguments to find a Agent
     * @example
     * // Get one Agent
     * const agent = await prisma.agent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AgentFindFirstOrThrowArgs>(args?: SelectSubset<T, AgentFindFirstOrThrowArgs<ExtArgs>>): Prisma__AgentClient<$Result.GetResult<Prisma.$AgentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Agents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Agents
     * const agents = await prisma.agent.findMany()
     * 
     * // Get first 10 Agents
     * const agents = await prisma.agent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const agentWithIdOnly = await prisma.agent.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AgentFindManyArgs>(args?: SelectSubset<T, AgentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AgentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Agent.
     * @param {AgentCreateArgs} args - Arguments to create a Agent.
     * @example
     * // Create one Agent
     * const Agent = await prisma.agent.create({
     *   data: {
     *     // ... data to create a Agent
     *   }
     * })
     * 
     */
    create<T extends AgentCreateArgs>(args: SelectSubset<T, AgentCreateArgs<ExtArgs>>): Prisma__AgentClient<$Result.GetResult<Prisma.$AgentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Agents.
     * @param {AgentCreateManyArgs} args - Arguments to create many Agents.
     * @example
     * // Create many Agents
     * const agent = await prisma.agent.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AgentCreateManyArgs>(args?: SelectSubset<T, AgentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Agents and returns the data saved in the database.
     * @param {AgentCreateManyAndReturnArgs} args - Arguments to create many Agents.
     * @example
     * // Create many Agents
     * const agent = await prisma.agent.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Agents and only return the `id`
     * const agentWithIdOnly = await prisma.agent.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AgentCreateManyAndReturnArgs>(args?: SelectSubset<T, AgentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AgentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Agent.
     * @param {AgentDeleteArgs} args - Arguments to delete one Agent.
     * @example
     * // Delete one Agent
     * const Agent = await prisma.agent.delete({
     *   where: {
     *     // ... filter to delete one Agent
     *   }
     * })
     * 
     */
    delete<T extends AgentDeleteArgs>(args: SelectSubset<T, AgentDeleteArgs<ExtArgs>>): Prisma__AgentClient<$Result.GetResult<Prisma.$AgentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Agent.
     * @param {AgentUpdateArgs} args - Arguments to update one Agent.
     * @example
     * // Update one Agent
     * const agent = await prisma.agent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AgentUpdateArgs>(args: SelectSubset<T, AgentUpdateArgs<ExtArgs>>): Prisma__AgentClient<$Result.GetResult<Prisma.$AgentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Agents.
     * @param {AgentDeleteManyArgs} args - Arguments to filter Agents to delete.
     * @example
     * // Delete a few Agents
     * const { count } = await prisma.agent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AgentDeleteManyArgs>(args?: SelectSubset<T, AgentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Agents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Agents
     * const agent = await prisma.agent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AgentUpdateManyArgs>(args: SelectSubset<T, AgentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Agents and returns the data updated in the database.
     * @param {AgentUpdateManyAndReturnArgs} args - Arguments to update many Agents.
     * @example
     * // Update many Agents
     * const agent = await prisma.agent.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Agents and only return the `id`
     * const agentWithIdOnly = await prisma.agent.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AgentUpdateManyAndReturnArgs>(args: SelectSubset<T, AgentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AgentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Agent.
     * @param {AgentUpsertArgs} args - Arguments to update or create a Agent.
     * @example
     * // Update or create a Agent
     * const agent = await prisma.agent.upsert({
     *   create: {
     *     // ... data to create a Agent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Agent we want to update
     *   }
     * })
     */
    upsert<T extends AgentUpsertArgs>(args: SelectSubset<T, AgentUpsertArgs<ExtArgs>>): Prisma__AgentClient<$Result.GetResult<Prisma.$AgentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Agents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgentCountArgs} args - Arguments to filter Agents to count.
     * @example
     * // Count the number of Agents
     * const count = await prisma.agent.count({
     *   where: {
     *     // ... the filter for the Agents we want to count
     *   }
     * })
    **/
    count<T extends AgentCountArgs>(
      args?: Subset<T, AgentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AgentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Agent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AgentAggregateArgs>(args: Subset<T, AgentAggregateArgs>): Prisma.PrismaPromise<GetAgentAggregateType<T>>

    /**
     * Group by Agent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgentGroupByArgs} args - Group by arguments.
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
      T extends AgentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AgentGroupByArgs['orderBy'] }
        : { orderBy?: AgentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, AgentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAgentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Agent model
   */
  readonly fields: AgentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Agent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AgentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    account<T extends AccountDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AccountDefaultArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    plugin<T extends Agent$pluginArgs<ExtArgs> = {}>(args?: Subset<T, Agent$pluginArgs<ExtArgs>>): Prisma__PluginClient<$Result.GetResult<Prisma.$PluginPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Agent model
   */
  interface AgentFieldRefs {
    readonly id: FieldRef<"Agent", 'String'>
    readonly name: FieldRef<"Agent", 'String'>
    readonly description: FieldRef<"Agent", 'String'>
    readonly tools: FieldRef<"Agent", 'String'>
    readonly model: FieldRef<"Agent", 'String'>
    readonly color: FieldRef<"Agent", 'String'>
    readonly filePath: FieldRef<"Agent", 'String'>
    readonly content: FieldRef<"Agent", 'String'>
    readonly source: FieldRef<"Agent", 'String'>
    readonly accountId: FieldRef<"Agent", 'String'>
    readonly pluginId: FieldRef<"Agent", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Agent findUnique
   */
  export type AgentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agent
     */
    select?: AgentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agent
     */
    omit?: AgentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentInclude<ExtArgs> | null
    /**
     * Filter, which Agent to fetch.
     */
    where: AgentWhereUniqueInput
  }

  /**
   * Agent findUniqueOrThrow
   */
  export type AgentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agent
     */
    select?: AgentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agent
     */
    omit?: AgentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentInclude<ExtArgs> | null
    /**
     * Filter, which Agent to fetch.
     */
    where: AgentWhereUniqueInput
  }

  /**
   * Agent findFirst
   */
  export type AgentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agent
     */
    select?: AgentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agent
     */
    omit?: AgentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentInclude<ExtArgs> | null
    /**
     * Filter, which Agent to fetch.
     */
    where?: AgentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Agents to fetch.
     */
    orderBy?: AgentOrderByWithRelationInput | AgentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Agents.
     */
    cursor?: AgentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Agents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Agents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Agents.
     */
    distinct?: AgentScalarFieldEnum | AgentScalarFieldEnum[]
  }

  /**
   * Agent findFirstOrThrow
   */
  export type AgentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agent
     */
    select?: AgentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agent
     */
    omit?: AgentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentInclude<ExtArgs> | null
    /**
     * Filter, which Agent to fetch.
     */
    where?: AgentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Agents to fetch.
     */
    orderBy?: AgentOrderByWithRelationInput | AgentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Agents.
     */
    cursor?: AgentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Agents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Agents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Agents.
     */
    distinct?: AgentScalarFieldEnum | AgentScalarFieldEnum[]
  }

  /**
   * Agent findMany
   */
  export type AgentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agent
     */
    select?: AgentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agent
     */
    omit?: AgentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentInclude<ExtArgs> | null
    /**
     * Filter, which Agents to fetch.
     */
    where?: AgentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Agents to fetch.
     */
    orderBy?: AgentOrderByWithRelationInput | AgentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Agents.
     */
    cursor?: AgentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Agents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Agents.
     */
    skip?: number
    distinct?: AgentScalarFieldEnum | AgentScalarFieldEnum[]
  }

  /**
   * Agent create
   */
  export type AgentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agent
     */
    select?: AgentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agent
     */
    omit?: AgentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentInclude<ExtArgs> | null
    /**
     * The data needed to create a Agent.
     */
    data: XOR<AgentCreateInput, AgentUncheckedCreateInput>
  }

  /**
   * Agent createMany
   */
  export type AgentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Agents.
     */
    data: AgentCreateManyInput | AgentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Agent createManyAndReturn
   */
  export type AgentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agent
     */
    select?: AgentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Agent
     */
    omit?: AgentOmit<ExtArgs> | null
    /**
     * The data used to create many Agents.
     */
    data: AgentCreateManyInput | AgentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Agent update
   */
  export type AgentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agent
     */
    select?: AgentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agent
     */
    omit?: AgentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentInclude<ExtArgs> | null
    /**
     * The data needed to update a Agent.
     */
    data: XOR<AgentUpdateInput, AgentUncheckedUpdateInput>
    /**
     * Choose, which Agent to update.
     */
    where: AgentWhereUniqueInput
  }

  /**
   * Agent updateMany
   */
  export type AgentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Agents.
     */
    data: XOR<AgentUpdateManyMutationInput, AgentUncheckedUpdateManyInput>
    /**
     * Filter which Agents to update
     */
    where?: AgentWhereInput
    /**
     * Limit how many Agents to update.
     */
    limit?: number
  }

  /**
   * Agent updateManyAndReturn
   */
  export type AgentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agent
     */
    select?: AgentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Agent
     */
    omit?: AgentOmit<ExtArgs> | null
    /**
     * The data used to update Agents.
     */
    data: XOR<AgentUpdateManyMutationInput, AgentUncheckedUpdateManyInput>
    /**
     * Filter which Agents to update
     */
    where?: AgentWhereInput
    /**
     * Limit how many Agents to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Agent upsert
   */
  export type AgentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agent
     */
    select?: AgentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agent
     */
    omit?: AgentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentInclude<ExtArgs> | null
    /**
     * The filter to search for the Agent to update in case it exists.
     */
    where: AgentWhereUniqueInput
    /**
     * In case the Agent found by the `where` argument doesn't exist, create a new Agent with this data.
     */
    create: XOR<AgentCreateInput, AgentUncheckedCreateInput>
    /**
     * In case the Agent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AgentUpdateInput, AgentUncheckedUpdateInput>
  }

  /**
   * Agent delete
   */
  export type AgentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agent
     */
    select?: AgentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agent
     */
    omit?: AgentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentInclude<ExtArgs> | null
    /**
     * Filter which Agent to delete.
     */
    where: AgentWhereUniqueInput
  }

  /**
   * Agent deleteMany
   */
  export type AgentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Agents to delete
     */
    where?: AgentWhereInput
    /**
     * Limit how many Agents to delete.
     */
    limit?: number
  }

  /**
   * Agent.plugin
   */
  export type Agent$pluginArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plugin
     */
    select?: PluginSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plugin
     */
    omit?: PluginOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PluginInclude<ExtArgs> | null
    where?: PluginWhereInput
  }

  /**
   * Agent without action
   */
  export type AgentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agent
     */
    select?: AgentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agent
     */
    omit?: AgentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentInclude<ExtArgs> | null
  }


  /**
   * Model Skill
   */

  export type AggregateSkill = {
    _count: SkillCountAggregateOutputType | null
    _min: SkillMinAggregateOutputType | null
    _max: SkillMaxAggregateOutputType | null
  }

  export type SkillMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    author: string | null
    version: string | null
    dirPath: string | null
    content: string | null
    source: string | null
    hasExamples: boolean | null
    hasScripts: boolean | null
    accountId: string | null
    pluginId: string | null
  }

  export type SkillMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    author: string | null
    version: string | null
    dirPath: string | null
    content: string | null
    source: string | null
    hasExamples: boolean | null
    hasScripts: boolean | null
    accountId: string | null
    pluginId: string | null
  }

  export type SkillCountAggregateOutputType = {
    id: number
    name: number
    description: number
    author: number
    version: number
    dirPath: number
    content: number
    source: number
    hasExamples: number
    hasScripts: number
    accountId: number
    pluginId: number
    _all: number
  }


  export type SkillMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    author?: true
    version?: true
    dirPath?: true
    content?: true
    source?: true
    hasExamples?: true
    hasScripts?: true
    accountId?: true
    pluginId?: true
  }

  export type SkillMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    author?: true
    version?: true
    dirPath?: true
    content?: true
    source?: true
    hasExamples?: true
    hasScripts?: true
    accountId?: true
    pluginId?: true
  }

  export type SkillCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    author?: true
    version?: true
    dirPath?: true
    content?: true
    source?: true
    hasExamples?: true
    hasScripts?: true
    accountId?: true
    pluginId?: true
    _all?: true
  }

  export type SkillAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Skill to aggregate.
     */
    where?: SkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Skills to fetch.
     */
    orderBy?: SkillOrderByWithRelationInput | SkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Skills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Skills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Skills
    **/
    _count?: true | SkillCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SkillMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SkillMaxAggregateInputType
  }

  export type GetSkillAggregateType<T extends SkillAggregateArgs> = {
        [P in keyof T & keyof AggregateSkill]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSkill[P]>
      : GetScalarType<T[P], AggregateSkill[P]>
  }




  export type SkillGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SkillWhereInput
    orderBy?: SkillOrderByWithAggregationInput | SkillOrderByWithAggregationInput[]
    by: SkillScalarFieldEnum[] | SkillScalarFieldEnum
    having?: SkillScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SkillCountAggregateInputType | true
    _min?: SkillMinAggregateInputType
    _max?: SkillMaxAggregateInputType
  }

  export type SkillGroupByOutputType = {
    id: string
    name: string
    description: string | null
    author: string | null
    version: string | null
    dirPath: string
    content: string
    source: string
    hasExamples: boolean
    hasScripts: boolean
    accountId: string
    pluginId: string | null
    _count: SkillCountAggregateOutputType | null
    _min: SkillMinAggregateOutputType | null
    _max: SkillMaxAggregateOutputType | null
  }

  type GetSkillGroupByPayload<T extends SkillGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SkillGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SkillGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SkillGroupByOutputType[P]>
            : GetScalarType<T[P], SkillGroupByOutputType[P]>
        }
      >
    >


  export type SkillSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    author?: boolean
    version?: boolean
    dirPath?: boolean
    content?: boolean
    source?: boolean
    hasExamples?: boolean
    hasScripts?: boolean
    accountId?: boolean
    pluginId?: boolean
    account?: boolean | AccountDefaultArgs<ExtArgs>
    plugin?: boolean | Skill$pluginArgs<ExtArgs>
  }, ExtArgs["result"]["skill"]>

  export type SkillSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    author?: boolean
    version?: boolean
    dirPath?: boolean
    content?: boolean
    source?: boolean
    hasExamples?: boolean
    hasScripts?: boolean
    accountId?: boolean
    pluginId?: boolean
    account?: boolean | AccountDefaultArgs<ExtArgs>
    plugin?: boolean | Skill$pluginArgs<ExtArgs>
  }, ExtArgs["result"]["skill"]>

  export type SkillSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    author?: boolean
    version?: boolean
    dirPath?: boolean
    content?: boolean
    source?: boolean
    hasExamples?: boolean
    hasScripts?: boolean
    accountId?: boolean
    pluginId?: boolean
    account?: boolean | AccountDefaultArgs<ExtArgs>
    plugin?: boolean | Skill$pluginArgs<ExtArgs>
  }, ExtArgs["result"]["skill"]>

  export type SkillSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    author?: boolean
    version?: boolean
    dirPath?: boolean
    content?: boolean
    source?: boolean
    hasExamples?: boolean
    hasScripts?: boolean
    accountId?: boolean
    pluginId?: boolean
  }

  export type SkillOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "author" | "version" | "dirPath" | "content" | "source" | "hasExamples" | "hasScripts" | "accountId" | "pluginId", ExtArgs["result"]["skill"]>
  export type SkillInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    account?: boolean | AccountDefaultArgs<ExtArgs>
    plugin?: boolean | Skill$pluginArgs<ExtArgs>
  }
  export type SkillIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    account?: boolean | AccountDefaultArgs<ExtArgs>
    plugin?: boolean | Skill$pluginArgs<ExtArgs>
  }
  export type SkillIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    account?: boolean | AccountDefaultArgs<ExtArgs>
    plugin?: boolean | Skill$pluginArgs<ExtArgs>
  }

  export type $SkillPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Skill"
    objects: {
      account: Prisma.$AccountPayload<ExtArgs>
      plugin: Prisma.$PluginPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      author: string | null
      version: string | null
      dirPath: string
      content: string
      source: string
      hasExamples: boolean
      hasScripts: boolean
      accountId: string
      pluginId: string | null
    }, ExtArgs["result"]["skill"]>
    composites: {}
  }

  type SkillGetPayload<S extends boolean | null | undefined | SkillDefaultArgs> = $Result.GetResult<Prisma.$SkillPayload, S>

  type SkillCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SkillFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SkillCountAggregateInputType | true
    }

  export interface SkillDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Skill'], meta: { name: 'Skill' } }
    /**
     * Find zero or one Skill that matches the filter.
     * @param {SkillFindUniqueArgs} args - Arguments to find a Skill
     * @example
     * // Get one Skill
     * const skill = await prisma.skill.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SkillFindUniqueArgs>(args: SelectSubset<T, SkillFindUniqueArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Skill that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SkillFindUniqueOrThrowArgs} args - Arguments to find a Skill
     * @example
     * // Get one Skill
     * const skill = await prisma.skill.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SkillFindUniqueOrThrowArgs>(args: SelectSubset<T, SkillFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Skill that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillFindFirstArgs} args - Arguments to find a Skill
     * @example
     * // Get one Skill
     * const skill = await prisma.skill.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SkillFindFirstArgs>(args?: SelectSubset<T, SkillFindFirstArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Skill that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillFindFirstOrThrowArgs} args - Arguments to find a Skill
     * @example
     * // Get one Skill
     * const skill = await prisma.skill.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SkillFindFirstOrThrowArgs>(args?: SelectSubset<T, SkillFindFirstOrThrowArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Skills that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Skills
     * const skills = await prisma.skill.findMany()
     * 
     * // Get first 10 Skills
     * const skills = await prisma.skill.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const skillWithIdOnly = await prisma.skill.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SkillFindManyArgs>(args?: SelectSubset<T, SkillFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Skill.
     * @param {SkillCreateArgs} args - Arguments to create a Skill.
     * @example
     * // Create one Skill
     * const Skill = await prisma.skill.create({
     *   data: {
     *     // ... data to create a Skill
     *   }
     * })
     * 
     */
    create<T extends SkillCreateArgs>(args: SelectSubset<T, SkillCreateArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Skills.
     * @param {SkillCreateManyArgs} args - Arguments to create many Skills.
     * @example
     * // Create many Skills
     * const skill = await prisma.skill.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SkillCreateManyArgs>(args?: SelectSubset<T, SkillCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Skills and returns the data saved in the database.
     * @param {SkillCreateManyAndReturnArgs} args - Arguments to create many Skills.
     * @example
     * // Create many Skills
     * const skill = await prisma.skill.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Skills and only return the `id`
     * const skillWithIdOnly = await prisma.skill.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SkillCreateManyAndReturnArgs>(args?: SelectSubset<T, SkillCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Skill.
     * @param {SkillDeleteArgs} args - Arguments to delete one Skill.
     * @example
     * // Delete one Skill
     * const Skill = await prisma.skill.delete({
     *   where: {
     *     // ... filter to delete one Skill
     *   }
     * })
     * 
     */
    delete<T extends SkillDeleteArgs>(args: SelectSubset<T, SkillDeleteArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Skill.
     * @param {SkillUpdateArgs} args - Arguments to update one Skill.
     * @example
     * // Update one Skill
     * const skill = await prisma.skill.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SkillUpdateArgs>(args: SelectSubset<T, SkillUpdateArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Skills.
     * @param {SkillDeleteManyArgs} args - Arguments to filter Skills to delete.
     * @example
     * // Delete a few Skills
     * const { count } = await prisma.skill.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SkillDeleteManyArgs>(args?: SelectSubset<T, SkillDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Skills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Skills
     * const skill = await prisma.skill.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SkillUpdateManyArgs>(args: SelectSubset<T, SkillUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Skills and returns the data updated in the database.
     * @param {SkillUpdateManyAndReturnArgs} args - Arguments to update many Skills.
     * @example
     * // Update many Skills
     * const skill = await prisma.skill.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Skills and only return the `id`
     * const skillWithIdOnly = await prisma.skill.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SkillUpdateManyAndReturnArgs>(args: SelectSubset<T, SkillUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Skill.
     * @param {SkillUpsertArgs} args - Arguments to update or create a Skill.
     * @example
     * // Update or create a Skill
     * const skill = await prisma.skill.upsert({
     *   create: {
     *     // ... data to create a Skill
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Skill we want to update
     *   }
     * })
     */
    upsert<T extends SkillUpsertArgs>(args: SelectSubset<T, SkillUpsertArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Skills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillCountArgs} args - Arguments to filter Skills to count.
     * @example
     * // Count the number of Skills
     * const count = await prisma.skill.count({
     *   where: {
     *     // ... the filter for the Skills we want to count
     *   }
     * })
    **/
    count<T extends SkillCountArgs>(
      args?: Subset<T, SkillCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SkillCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Skill.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SkillAggregateArgs>(args: Subset<T, SkillAggregateArgs>): Prisma.PrismaPromise<GetSkillAggregateType<T>>

    /**
     * Group by Skill.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillGroupByArgs} args - Group by arguments.
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
      T extends SkillGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SkillGroupByArgs['orderBy'] }
        : { orderBy?: SkillGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, SkillGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSkillGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Skill model
   */
  readonly fields: SkillFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Skill.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SkillClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    account<T extends AccountDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AccountDefaultArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    plugin<T extends Skill$pluginArgs<ExtArgs> = {}>(args?: Subset<T, Skill$pluginArgs<ExtArgs>>): Prisma__PluginClient<$Result.GetResult<Prisma.$PluginPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Skill model
   */
  interface SkillFieldRefs {
    readonly id: FieldRef<"Skill", 'String'>
    readonly name: FieldRef<"Skill", 'String'>
    readonly description: FieldRef<"Skill", 'String'>
    readonly author: FieldRef<"Skill", 'String'>
    readonly version: FieldRef<"Skill", 'String'>
    readonly dirPath: FieldRef<"Skill", 'String'>
    readonly content: FieldRef<"Skill", 'String'>
    readonly source: FieldRef<"Skill", 'String'>
    readonly hasExamples: FieldRef<"Skill", 'Boolean'>
    readonly hasScripts: FieldRef<"Skill", 'Boolean'>
    readonly accountId: FieldRef<"Skill", 'String'>
    readonly pluginId: FieldRef<"Skill", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Skill findUnique
   */
  export type SkillFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * Filter, which Skill to fetch.
     */
    where: SkillWhereUniqueInput
  }

  /**
   * Skill findUniqueOrThrow
   */
  export type SkillFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * Filter, which Skill to fetch.
     */
    where: SkillWhereUniqueInput
  }

  /**
   * Skill findFirst
   */
  export type SkillFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * Filter, which Skill to fetch.
     */
    where?: SkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Skills to fetch.
     */
    orderBy?: SkillOrderByWithRelationInput | SkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Skills.
     */
    cursor?: SkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Skills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Skills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Skills.
     */
    distinct?: SkillScalarFieldEnum | SkillScalarFieldEnum[]
  }

  /**
   * Skill findFirstOrThrow
   */
  export type SkillFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * Filter, which Skill to fetch.
     */
    where?: SkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Skills to fetch.
     */
    orderBy?: SkillOrderByWithRelationInput | SkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Skills.
     */
    cursor?: SkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Skills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Skills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Skills.
     */
    distinct?: SkillScalarFieldEnum | SkillScalarFieldEnum[]
  }

  /**
   * Skill findMany
   */
  export type SkillFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * Filter, which Skills to fetch.
     */
    where?: SkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Skills to fetch.
     */
    orderBy?: SkillOrderByWithRelationInput | SkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Skills.
     */
    cursor?: SkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Skills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Skills.
     */
    skip?: number
    distinct?: SkillScalarFieldEnum | SkillScalarFieldEnum[]
  }

  /**
   * Skill create
   */
  export type SkillCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * The data needed to create a Skill.
     */
    data: XOR<SkillCreateInput, SkillUncheckedCreateInput>
  }

  /**
   * Skill createMany
   */
  export type SkillCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Skills.
     */
    data: SkillCreateManyInput | SkillCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Skill createManyAndReturn
   */
  export type SkillCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * The data used to create many Skills.
     */
    data: SkillCreateManyInput | SkillCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Skill update
   */
  export type SkillUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * The data needed to update a Skill.
     */
    data: XOR<SkillUpdateInput, SkillUncheckedUpdateInput>
    /**
     * Choose, which Skill to update.
     */
    where: SkillWhereUniqueInput
  }

  /**
   * Skill updateMany
   */
  export type SkillUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Skills.
     */
    data: XOR<SkillUpdateManyMutationInput, SkillUncheckedUpdateManyInput>
    /**
     * Filter which Skills to update
     */
    where?: SkillWhereInput
    /**
     * Limit how many Skills to update.
     */
    limit?: number
  }

  /**
   * Skill updateManyAndReturn
   */
  export type SkillUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * The data used to update Skills.
     */
    data: XOR<SkillUpdateManyMutationInput, SkillUncheckedUpdateManyInput>
    /**
     * Filter which Skills to update
     */
    where?: SkillWhereInput
    /**
     * Limit how many Skills to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Skill upsert
   */
  export type SkillUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * The filter to search for the Skill to update in case it exists.
     */
    where: SkillWhereUniqueInput
    /**
     * In case the Skill found by the `where` argument doesn't exist, create a new Skill with this data.
     */
    create: XOR<SkillCreateInput, SkillUncheckedCreateInput>
    /**
     * In case the Skill was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SkillUpdateInput, SkillUncheckedUpdateInput>
  }

  /**
   * Skill delete
   */
  export type SkillDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * Filter which Skill to delete.
     */
    where: SkillWhereUniqueInput
  }

  /**
   * Skill deleteMany
   */
  export type SkillDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Skills to delete
     */
    where?: SkillWhereInput
    /**
     * Limit how many Skills to delete.
     */
    limit?: number
  }

  /**
   * Skill.plugin
   */
  export type Skill$pluginArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plugin
     */
    select?: PluginSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plugin
     */
    omit?: PluginOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PluginInclude<ExtArgs> | null
    where?: PluginWhereInput
  }

  /**
   * Skill without action
   */
  export type SkillDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
  }


  /**
   * Model Command
   */

  export type AggregateCommand = {
    _count: CommandCountAggregateOutputType | null
    _min: CommandMinAggregateOutputType | null
    _max: CommandMaxAggregateOutputType | null
  }

  export type CommandMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    filePath: string | null
    content: string | null
    source: string | null
    accountId: string | null
    projectId: string | null
    pluginId: string | null
  }

  export type CommandMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    filePath: string | null
    content: string | null
    source: string | null
    accountId: string | null
    projectId: string | null
    pluginId: string | null
  }

  export type CommandCountAggregateOutputType = {
    id: number
    name: number
    description: number
    filePath: number
    content: number
    source: number
    accountId: number
    projectId: number
    pluginId: number
    _all: number
  }


  export type CommandMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    filePath?: true
    content?: true
    source?: true
    accountId?: true
    projectId?: true
    pluginId?: true
  }

  export type CommandMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    filePath?: true
    content?: true
    source?: true
    accountId?: true
    projectId?: true
    pluginId?: true
  }

  export type CommandCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    filePath?: true
    content?: true
    source?: true
    accountId?: true
    projectId?: true
    pluginId?: true
    _all?: true
  }

  export type CommandAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Command to aggregate.
     */
    where?: CommandWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Commands to fetch.
     */
    orderBy?: CommandOrderByWithRelationInput | CommandOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CommandWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Commands from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Commands.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Commands
    **/
    _count?: true | CommandCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CommandMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CommandMaxAggregateInputType
  }

  export type GetCommandAggregateType<T extends CommandAggregateArgs> = {
        [P in keyof T & keyof AggregateCommand]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCommand[P]>
      : GetScalarType<T[P], AggregateCommand[P]>
  }




  export type CommandGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommandWhereInput
    orderBy?: CommandOrderByWithAggregationInput | CommandOrderByWithAggregationInput[]
    by: CommandScalarFieldEnum[] | CommandScalarFieldEnum
    having?: CommandScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CommandCountAggregateInputType | true
    _min?: CommandMinAggregateInputType
    _max?: CommandMaxAggregateInputType
  }

  export type CommandGroupByOutputType = {
    id: string
    name: string
    description: string | null
    filePath: string
    content: string
    source: string
    accountId: string | null
    projectId: string | null
    pluginId: string | null
    _count: CommandCountAggregateOutputType | null
    _min: CommandMinAggregateOutputType | null
    _max: CommandMaxAggregateOutputType | null
  }

  type GetCommandGroupByPayload<T extends CommandGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CommandGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CommandGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CommandGroupByOutputType[P]>
            : GetScalarType<T[P], CommandGroupByOutputType[P]>
        }
      >
    >


  export type CommandSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    filePath?: boolean
    content?: boolean
    source?: boolean
    accountId?: boolean
    projectId?: boolean
    pluginId?: boolean
    account?: boolean | Command$accountArgs<ExtArgs>
    project?: boolean | Command$projectArgs<ExtArgs>
    plugin?: boolean | Command$pluginArgs<ExtArgs>
  }, ExtArgs["result"]["command"]>

  export type CommandSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    filePath?: boolean
    content?: boolean
    source?: boolean
    accountId?: boolean
    projectId?: boolean
    pluginId?: boolean
    account?: boolean | Command$accountArgs<ExtArgs>
    project?: boolean | Command$projectArgs<ExtArgs>
    plugin?: boolean | Command$pluginArgs<ExtArgs>
  }, ExtArgs["result"]["command"]>

  export type CommandSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    filePath?: boolean
    content?: boolean
    source?: boolean
    accountId?: boolean
    projectId?: boolean
    pluginId?: boolean
    account?: boolean | Command$accountArgs<ExtArgs>
    project?: boolean | Command$projectArgs<ExtArgs>
    plugin?: boolean | Command$pluginArgs<ExtArgs>
  }, ExtArgs["result"]["command"]>

  export type CommandSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    filePath?: boolean
    content?: boolean
    source?: boolean
    accountId?: boolean
    projectId?: boolean
    pluginId?: boolean
  }

  export type CommandOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "filePath" | "content" | "source" | "accountId" | "projectId" | "pluginId", ExtArgs["result"]["command"]>
  export type CommandInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    account?: boolean | Command$accountArgs<ExtArgs>
    project?: boolean | Command$projectArgs<ExtArgs>
    plugin?: boolean | Command$pluginArgs<ExtArgs>
  }
  export type CommandIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    account?: boolean | Command$accountArgs<ExtArgs>
    project?: boolean | Command$projectArgs<ExtArgs>
    plugin?: boolean | Command$pluginArgs<ExtArgs>
  }
  export type CommandIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    account?: boolean | Command$accountArgs<ExtArgs>
    project?: boolean | Command$projectArgs<ExtArgs>
    plugin?: boolean | Command$pluginArgs<ExtArgs>
  }

  export type $CommandPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Command"
    objects: {
      account: Prisma.$AccountPayload<ExtArgs> | null
      project: Prisma.$ProjectPayload<ExtArgs> | null
      plugin: Prisma.$PluginPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      filePath: string
      content: string
      source: string
      accountId: string | null
      projectId: string | null
      pluginId: string | null
    }, ExtArgs["result"]["command"]>
    composites: {}
  }

  type CommandGetPayload<S extends boolean | null | undefined | CommandDefaultArgs> = $Result.GetResult<Prisma.$CommandPayload, S>

  type CommandCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CommandFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CommandCountAggregateInputType | true
    }

  export interface CommandDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Command'], meta: { name: 'Command' } }
    /**
     * Find zero or one Command that matches the filter.
     * @param {CommandFindUniqueArgs} args - Arguments to find a Command
     * @example
     * // Get one Command
     * const command = await prisma.command.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CommandFindUniqueArgs>(args: SelectSubset<T, CommandFindUniqueArgs<ExtArgs>>): Prisma__CommandClient<$Result.GetResult<Prisma.$CommandPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Command that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CommandFindUniqueOrThrowArgs} args - Arguments to find a Command
     * @example
     * // Get one Command
     * const command = await prisma.command.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CommandFindUniqueOrThrowArgs>(args: SelectSubset<T, CommandFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CommandClient<$Result.GetResult<Prisma.$CommandPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Command that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommandFindFirstArgs} args - Arguments to find a Command
     * @example
     * // Get one Command
     * const command = await prisma.command.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CommandFindFirstArgs>(args?: SelectSubset<T, CommandFindFirstArgs<ExtArgs>>): Prisma__CommandClient<$Result.GetResult<Prisma.$CommandPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Command that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommandFindFirstOrThrowArgs} args - Arguments to find a Command
     * @example
     * // Get one Command
     * const command = await prisma.command.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CommandFindFirstOrThrowArgs>(args?: SelectSubset<T, CommandFindFirstOrThrowArgs<ExtArgs>>): Prisma__CommandClient<$Result.GetResult<Prisma.$CommandPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Commands that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommandFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Commands
     * const commands = await prisma.command.findMany()
     * 
     * // Get first 10 Commands
     * const commands = await prisma.command.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const commandWithIdOnly = await prisma.command.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CommandFindManyArgs>(args?: SelectSubset<T, CommandFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommandPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Command.
     * @param {CommandCreateArgs} args - Arguments to create a Command.
     * @example
     * // Create one Command
     * const Command = await prisma.command.create({
     *   data: {
     *     // ... data to create a Command
     *   }
     * })
     * 
     */
    create<T extends CommandCreateArgs>(args: SelectSubset<T, CommandCreateArgs<ExtArgs>>): Prisma__CommandClient<$Result.GetResult<Prisma.$CommandPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Commands.
     * @param {CommandCreateManyArgs} args - Arguments to create many Commands.
     * @example
     * // Create many Commands
     * const command = await prisma.command.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CommandCreateManyArgs>(args?: SelectSubset<T, CommandCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Commands and returns the data saved in the database.
     * @param {CommandCreateManyAndReturnArgs} args - Arguments to create many Commands.
     * @example
     * // Create many Commands
     * const command = await prisma.command.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Commands and only return the `id`
     * const commandWithIdOnly = await prisma.command.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CommandCreateManyAndReturnArgs>(args?: SelectSubset<T, CommandCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommandPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Command.
     * @param {CommandDeleteArgs} args - Arguments to delete one Command.
     * @example
     * // Delete one Command
     * const Command = await prisma.command.delete({
     *   where: {
     *     // ... filter to delete one Command
     *   }
     * })
     * 
     */
    delete<T extends CommandDeleteArgs>(args: SelectSubset<T, CommandDeleteArgs<ExtArgs>>): Prisma__CommandClient<$Result.GetResult<Prisma.$CommandPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Command.
     * @param {CommandUpdateArgs} args - Arguments to update one Command.
     * @example
     * // Update one Command
     * const command = await prisma.command.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CommandUpdateArgs>(args: SelectSubset<T, CommandUpdateArgs<ExtArgs>>): Prisma__CommandClient<$Result.GetResult<Prisma.$CommandPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Commands.
     * @param {CommandDeleteManyArgs} args - Arguments to filter Commands to delete.
     * @example
     * // Delete a few Commands
     * const { count } = await prisma.command.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CommandDeleteManyArgs>(args?: SelectSubset<T, CommandDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Commands.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommandUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Commands
     * const command = await prisma.command.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CommandUpdateManyArgs>(args: SelectSubset<T, CommandUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Commands and returns the data updated in the database.
     * @param {CommandUpdateManyAndReturnArgs} args - Arguments to update many Commands.
     * @example
     * // Update many Commands
     * const command = await prisma.command.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Commands and only return the `id`
     * const commandWithIdOnly = await prisma.command.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CommandUpdateManyAndReturnArgs>(args: SelectSubset<T, CommandUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommandPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Command.
     * @param {CommandUpsertArgs} args - Arguments to update or create a Command.
     * @example
     * // Update or create a Command
     * const command = await prisma.command.upsert({
     *   create: {
     *     // ... data to create a Command
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Command we want to update
     *   }
     * })
     */
    upsert<T extends CommandUpsertArgs>(args: SelectSubset<T, CommandUpsertArgs<ExtArgs>>): Prisma__CommandClient<$Result.GetResult<Prisma.$CommandPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Commands.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommandCountArgs} args - Arguments to filter Commands to count.
     * @example
     * // Count the number of Commands
     * const count = await prisma.command.count({
     *   where: {
     *     // ... the filter for the Commands we want to count
     *   }
     * })
    **/
    count<T extends CommandCountArgs>(
      args?: Subset<T, CommandCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CommandCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Command.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommandAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CommandAggregateArgs>(args: Subset<T, CommandAggregateArgs>): Prisma.PrismaPromise<GetCommandAggregateType<T>>

    /**
     * Group by Command.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommandGroupByArgs} args - Group by arguments.
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
      T extends CommandGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CommandGroupByArgs['orderBy'] }
        : { orderBy?: CommandGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, CommandGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommandGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Command model
   */
  readonly fields: CommandFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Command.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CommandClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    account<T extends Command$accountArgs<ExtArgs> = {}>(args?: Subset<T, Command$accountArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    project<T extends Command$projectArgs<ExtArgs> = {}>(args?: Subset<T, Command$projectArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    plugin<T extends Command$pluginArgs<ExtArgs> = {}>(args?: Subset<T, Command$pluginArgs<ExtArgs>>): Prisma__PluginClient<$Result.GetResult<Prisma.$PluginPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Command model
   */
  interface CommandFieldRefs {
    readonly id: FieldRef<"Command", 'String'>
    readonly name: FieldRef<"Command", 'String'>
    readonly description: FieldRef<"Command", 'String'>
    readonly filePath: FieldRef<"Command", 'String'>
    readonly content: FieldRef<"Command", 'String'>
    readonly source: FieldRef<"Command", 'String'>
    readonly accountId: FieldRef<"Command", 'String'>
    readonly projectId: FieldRef<"Command", 'String'>
    readonly pluginId: FieldRef<"Command", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Command findUnique
   */
  export type CommandFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Command
     */
    select?: CommandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Command
     */
    omit?: CommandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommandInclude<ExtArgs> | null
    /**
     * Filter, which Command to fetch.
     */
    where: CommandWhereUniqueInput
  }

  /**
   * Command findUniqueOrThrow
   */
  export type CommandFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Command
     */
    select?: CommandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Command
     */
    omit?: CommandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommandInclude<ExtArgs> | null
    /**
     * Filter, which Command to fetch.
     */
    where: CommandWhereUniqueInput
  }

  /**
   * Command findFirst
   */
  export type CommandFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Command
     */
    select?: CommandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Command
     */
    omit?: CommandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommandInclude<ExtArgs> | null
    /**
     * Filter, which Command to fetch.
     */
    where?: CommandWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Commands to fetch.
     */
    orderBy?: CommandOrderByWithRelationInput | CommandOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Commands.
     */
    cursor?: CommandWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Commands from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Commands.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Commands.
     */
    distinct?: CommandScalarFieldEnum | CommandScalarFieldEnum[]
  }

  /**
   * Command findFirstOrThrow
   */
  export type CommandFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Command
     */
    select?: CommandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Command
     */
    omit?: CommandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommandInclude<ExtArgs> | null
    /**
     * Filter, which Command to fetch.
     */
    where?: CommandWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Commands to fetch.
     */
    orderBy?: CommandOrderByWithRelationInput | CommandOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Commands.
     */
    cursor?: CommandWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Commands from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Commands.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Commands.
     */
    distinct?: CommandScalarFieldEnum | CommandScalarFieldEnum[]
  }

  /**
   * Command findMany
   */
  export type CommandFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Command
     */
    select?: CommandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Command
     */
    omit?: CommandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommandInclude<ExtArgs> | null
    /**
     * Filter, which Commands to fetch.
     */
    where?: CommandWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Commands to fetch.
     */
    orderBy?: CommandOrderByWithRelationInput | CommandOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Commands.
     */
    cursor?: CommandWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Commands from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Commands.
     */
    skip?: number
    distinct?: CommandScalarFieldEnum | CommandScalarFieldEnum[]
  }

  /**
   * Command create
   */
  export type CommandCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Command
     */
    select?: CommandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Command
     */
    omit?: CommandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommandInclude<ExtArgs> | null
    /**
     * The data needed to create a Command.
     */
    data: XOR<CommandCreateInput, CommandUncheckedCreateInput>
  }

  /**
   * Command createMany
   */
  export type CommandCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Commands.
     */
    data: CommandCreateManyInput | CommandCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Command createManyAndReturn
   */
  export type CommandCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Command
     */
    select?: CommandSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Command
     */
    omit?: CommandOmit<ExtArgs> | null
    /**
     * The data used to create many Commands.
     */
    data: CommandCreateManyInput | CommandCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommandIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Command update
   */
  export type CommandUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Command
     */
    select?: CommandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Command
     */
    omit?: CommandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommandInclude<ExtArgs> | null
    /**
     * The data needed to update a Command.
     */
    data: XOR<CommandUpdateInput, CommandUncheckedUpdateInput>
    /**
     * Choose, which Command to update.
     */
    where: CommandWhereUniqueInput
  }

  /**
   * Command updateMany
   */
  export type CommandUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Commands.
     */
    data: XOR<CommandUpdateManyMutationInput, CommandUncheckedUpdateManyInput>
    /**
     * Filter which Commands to update
     */
    where?: CommandWhereInput
    /**
     * Limit how many Commands to update.
     */
    limit?: number
  }

  /**
   * Command updateManyAndReturn
   */
  export type CommandUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Command
     */
    select?: CommandSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Command
     */
    omit?: CommandOmit<ExtArgs> | null
    /**
     * The data used to update Commands.
     */
    data: XOR<CommandUpdateManyMutationInput, CommandUncheckedUpdateManyInput>
    /**
     * Filter which Commands to update
     */
    where?: CommandWhereInput
    /**
     * Limit how many Commands to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommandIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Command upsert
   */
  export type CommandUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Command
     */
    select?: CommandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Command
     */
    omit?: CommandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommandInclude<ExtArgs> | null
    /**
     * The filter to search for the Command to update in case it exists.
     */
    where: CommandWhereUniqueInput
    /**
     * In case the Command found by the `where` argument doesn't exist, create a new Command with this data.
     */
    create: XOR<CommandCreateInput, CommandUncheckedCreateInput>
    /**
     * In case the Command was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CommandUpdateInput, CommandUncheckedUpdateInput>
  }

  /**
   * Command delete
   */
  export type CommandDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Command
     */
    select?: CommandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Command
     */
    omit?: CommandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommandInclude<ExtArgs> | null
    /**
     * Filter which Command to delete.
     */
    where: CommandWhereUniqueInput
  }

  /**
   * Command deleteMany
   */
  export type CommandDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Commands to delete
     */
    where?: CommandWhereInput
    /**
     * Limit how many Commands to delete.
     */
    limit?: number
  }

  /**
   * Command.account
   */
  export type Command$accountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    where?: AccountWhereInput
  }

  /**
   * Command.project
   */
  export type Command$projectArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    where?: ProjectWhereInput
  }

  /**
   * Command.plugin
   */
  export type Command$pluginArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plugin
     */
    select?: PluginSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plugin
     */
    omit?: PluginOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PluginInclude<ExtArgs> | null
    where?: PluginWhereInput
  }

  /**
   * Command without action
   */
  export type CommandDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Command
     */
    select?: CommandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Command
     */
    omit?: CommandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommandInclude<ExtArgs> | null
  }


  /**
   * Model Plugin
   */

  export type AggregatePlugin = {
    _count: PluginCountAggregateOutputType | null
    _min: PluginMinAggregateOutputType | null
    _max: PluginMaxAggregateOutputType | null
  }

  export type PluginMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    author: string | null
    category: string | null
    dirPath: string | null
    accountId: string | null
  }

  export type PluginMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    author: string | null
    category: string | null
    dirPath: string | null
    accountId: string | null
  }

  export type PluginCountAggregateOutputType = {
    id: number
    name: number
    description: number
    author: number
    category: number
    dirPath: number
    accountId: number
    _all: number
  }


  export type PluginMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    author?: true
    category?: true
    dirPath?: true
    accountId?: true
  }

  export type PluginMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    author?: true
    category?: true
    dirPath?: true
    accountId?: true
  }

  export type PluginCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    author?: true
    category?: true
    dirPath?: true
    accountId?: true
    _all?: true
  }

  export type PluginAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Plugin to aggregate.
     */
    where?: PluginWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Plugins to fetch.
     */
    orderBy?: PluginOrderByWithRelationInput | PluginOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PluginWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Plugins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Plugins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Plugins
    **/
    _count?: true | PluginCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PluginMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PluginMaxAggregateInputType
  }

  export type GetPluginAggregateType<T extends PluginAggregateArgs> = {
        [P in keyof T & keyof AggregatePlugin]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlugin[P]>
      : GetScalarType<T[P], AggregatePlugin[P]>
  }




  export type PluginGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PluginWhereInput
    orderBy?: PluginOrderByWithAggregationInput | PluginOrderByWithAggregationInput[]
    by: PluginScalarFieldEnum[] | PluginScalarFieldEnum
    having?: PluginScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PluginCountAggregateInputType | true
    _min?: PluginMinAggregateInputType
    _max?: PluginMaxAggregateInputType
  }

  export type PluginGroupByOutputType = {
    id: string
    name: string
    description: string | null
    author: string | null
    category: string | null
    dirPath: string
    accountId: string
    _count: PluginCountAggregateOutputType | null
    _min: PluginMinAggregateOutputType | null
    _max: PluginMaxAggregateOutputType | null
  }

  type GetPluginGroupByPayload<T extends PluginGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PluginGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PluginGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PluginGroupByOutputType[P]>
            : GetScalarType<T[P], PluginGroupByOutputType[P]>
        }
      >
    >


  export type PluginSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    author?: boolean
    category?: boolean
    dirPath?: boolean
    accountId?: boolean
    account?: boolean | AccountDefaultArgs<ExtArgs>
    agents?: boolean | Plugin$agentsArgs<ExtArgs>
    skills?: boolean | Plugin$skillsArgs<ExtArgs>
    commands?: boolean | Plugin$commandsArgs<ExtArgs>
    _count?: boolean | PluginCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["plugin"]>

  export type PluginSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    author?: boolean
    category?: boolean
    dirPath?: boolean
    accountId?: boolean
    account?: boolean | AccountDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["plugin"]>

  export type PluginSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    author?: boolean
    category?: boolean
    dirPath?: boolean
    accountId?: boolean
    account?: boolean | AccountDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["plugin"]>

  export type PluginSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    author?: boolean
    category?: boolean
    dirPath?: boolean
    accountId?: boolean
  }

  export type PluginOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "author" | "category" | "dirPath" | "accountId", ExtArgs["result"]["plugin"]>
  export type PluginInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    account?: boolean | AccountDefaultArgs<ExtArgs>
    agents?: boolean | Plugin$agentsArgs<ExtArgs>
    skills?: boolean | Plugin$skillsArgs<ExtArgs>
    commands?: boolean | Plugin$commandsArgs<ExtArgs>
    _count?: boolean | PluginCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PluginIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    account?: boolean | AccountDefaultArgs<ExtArgs>
  }
  export type PluginIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    account?: boolean | AccountDefaultArgs<ExtArgs>
  }

  export type $PluginPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Plugin"
    objects: {
      account: Prisma.$AccountPayload<ExtArgs>
      agents: Prisma.$AgentPayload<ExtArgs>[]
      skills: Prisma.$SkillPayload<ExtArgs>[]
      commands: Prisma.$CommandPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      author: string | null
      category: string | null
      dirPath: string
      accountId: string
    }, ExtArgs["result"]["plugin"]>
    composites: {}
  }

  type PluginGetPayload<S extends boolean | null | undefined | PluginDefaultArgs> = $Result.GetResult<Prisma.$PluginPayload, S>

  type PluginCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PluginFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PluginCountAggregateInputType | true
    }

  export interface PluginDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Plugin'], meta: { name: 'Plugin' } }
    /**
     * Find zero or one Plugin that matches the filter.
     * @param {PluginFindUniqueArgs} args - Arguments to find a Plugin
     * @example
     * // Get one Plugin
     * const plugin = await prisma.plugin.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PluginFindUniqueArgs>(args: SelectSubset<T, PluginFindUniqueArgs<ExtArgs>>): Prisma__PluginClient<$Result.GetResult<Prisma.$PluginPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Plugin that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PluginFindUniqueOrThrowArgs} args - Arguments to find a Plugin
     * @example
     * // Get one Plugin
     * const plugin = await prisma.plugin.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PluginFindUniqueOrThrowArgs>(args: SelectSubset<T, PluginFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PluginClient<$Result.GetResult<Prisma.$PluginPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Plugin that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PluginFindFirstArgs} args - Arguments to find a Plugin
     * @example
     * // Get one Plugin
     * const plugin = await prisma.plugin.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PluginFindFirstArgs>(args?: SelectSubset<T, PluginFindFirstArgs<ExtArgs>>): Prisma__PluginClient<$Result.GetResult<Prisma.$PluginPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Plugin that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PluginFindFirstOrThrowArgs} args - Arguments to find a Plugin
     * @example
     * // Get one Plugin
     * const plugin = await prisma.plugin.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PluginFindFirstOrThrowArgs>(args?: SelectSubset<T, PluginFindFirstOrThrowArgs<ExtArgs>>): Prisma__PluginClient<$Result.GetResult<Prisma.$PluginPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Plugins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PluginFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Plugins
     * const plugins = await prisma.plugin.findMany()
     * 
     * // Get first 10 Plugins
     * const plugins = await prisma.plugin.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pluginWithIdOnly = await prisma.plugin.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PluginFindManyArgs>(args?: SelectSubset<T, PluginFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PluginPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Plugin.
     * @param {PluginCreateArgs} args - Arguments to create a Plugin.
     * @example
     * // Create one Plugin
     * const Plugin = await prisma.plugin.create({
     *   data: {
     *     // ... data to create a Plugin
     *   }
     * })
     * 
     */
    create<T extends PluginCreateArgs>(args: SelectSubset<T, PluginCreateArgs<ExtArgs>>): Prisma__PluginClient<$Result.GetResult<Prisma.$PluginPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Plugins.
     * @param {PluginCreateManyArgs} args - Arguments to create many Plugins.
     * @example
     * // Create many Plugins
     * const plugin = await prisma.plugin.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PluginCreateManyArgs>(args?: SelectSubset<T, PluginCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Plugins and returns the data saved in the database.
     * @param {PluginCreateManyAndReturnArgs} args - Arguments to create many Plugins.
     * @example
     * // Create many Plugins
     * const plugin = await prisma.plugin.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Plugins and only return the `id`
     * const pluginWithIdOnly = await prisma.plugin.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PluginCreateManyAndReturnArgs>(args?: SelectSubset<T, PluginCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PluginPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Plugin.
     * @param {PluginDeleteArgs} args - Arguments to delete one Plugin.
     * @example
     * // Delete one Plugin
     * const Plugin = await prisma.plugin.delete({
     *   where: {
     *     // ... filter to delete one Plugin
     *   }
     * })
     * 
     */
    delete<T extends PluginDeleteArgs>(args: SelectSubset<T, PluginDeleteArgs<ExtArgs>>): Prisma__PluginClient<$Result.GetResult<Prisma.$PluginPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Plugin.
     * @param {PluginUpdateArgs} args - Arguments to update one Plugin.
     * @example
     * // Update one Plugin
     * const plugin = await prisma.plugin.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PluginUpdateArgs>(args: SelectSubset<T, PluginUpdateArgs<ExtArgs>>): Prisma__PluginClient<$Result.GetResult<Prisma.$PluginPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Plugins.
     * @param {PluginDeleteManyArgs} args - Arguments to filter Plugins to delete.
     * @example
     * // Delete a few Plugins
     * const { count } = await prisma.plugin.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PluginDeleteManyArgs>(args?: SelectSubset<T, PluginDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Plugins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PluginUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Plugins
     * const plugin = await prisma.plugin.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PluginUpdateManyArgs>(args: SelectSubset<T, PluginUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Plugins and returns the data updated in the database.
     * @param {PluginUpdateManyAndReturnArgs} args - Arguments to update many Plugins.
     * @example
     * // Update many Plugins
     * const plugin = await prisma.plugin.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Plugins and only return the `id`
     * const pluginWithIdOnly = await prisma.plugin.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PluginUpdateManyAndReturnArgs>(args: SelectSubset<T, PluginUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PluginPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Plugin.
     * @param {PluginUpsertArgs} args - Arguments to update or create a Plugin.
     * @example
     * // Update or create a Plugin
     * const plugin = await prisma.plugin.upsert({
     *   create: {
     *     // ... data to create a Plugin
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Plugin we want to update
     *   }
     * })
     */
    upsert<T extends PluginUpsertArgs>(args: SelectSubset<T, PluginUpsertArgs<ExtArgs>>): Prisma__PluginClient<$Result.GetResult<Prisma.$PluginPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Plugins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PluginCountArgs} args - Arguments to filter Plugins to count.
     * @example
     * // Count the number of Plugins
     * const count = await prisma.plugin.count({
     *   where: {
     *     // ... the filter for the Plugins we want to count
     *   }
     * })
    **/
    count<T extends PluginCountArgs>(
      args?: Subset<T, PluginCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PluginCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Plugin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PluginAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PluginAggregateArgs>(args: Subset<T, PluginAggregateArgs>): Prisma.PrismaPromise<GetPluginAggregateType<T>>

    /**
     * Group by Plugin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PluginGroupByArgs} args - Group by arguments.
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
      T extends PluginGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PluginGroupByArgs['orderBy'] }
        : { orderBy?: PluginGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, PluginGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPluginGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Plugin model
   */
  readonly fields: PluginFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Plugin.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PluginClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    account<T extends AccountDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AccountDefaultArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    agents<T extends Plugin$agentsArgs<ExtArgs> = {}>(args?: Subset<T, Plugin$agentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AgentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    skills<T extends Plugin$skillsArgs<ExtArgs> = {}>(args?: Subset<T, Plugin$skillsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    commands<T extends Plugin$commandsArgs<ExtArgs> = {}>(args?: Subset<T, Plugin$commandsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommandPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Plugin model
   */
  interface PluginFieldRefs {
    readonly id: FieldRef<"Plugin", 'String'>
    readonly name: FieldRef<"Plugin", 'String'>
    readonly description: FieldRef<"Plugin", 'String'>
    readonly author: FieldRef<"Plugin", 'String'>
    readonly category: FieldRef<"Plugin", 'String'>
    readonly dirPath: FieldRef<"Plugin", 'String'>
    readonly accountId: FieldRef<"Plugin", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Plugin findUnique
   */
  export type PluginFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plugin
     */
    select?: PluginSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plugin
     */
    omit?: PluginOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PluginInclude<ExtArgs> | null
    /**
     * Filter, which Plugin to fetch.
     */
    where: PluginWhereUniqueInput
  }

  /**
   * Plugin findUniqueOrThrow
   */
  export type PluginFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plugin
     */
    select?: PluginSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plugin
     */
    omit?: PluginOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PluginInclude<ExtArgs> | null
    /**
     * Filter, which Plugin to fetch.
     */
    where: PluginWhereUniqueInput
  }

  /**
   * Plugin findFirst
   */
  export type PluginFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plugin
     */
    select?: PluginSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plugin
     */
    omit?: PluginOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PluginInclude<ExtArgs> | null
    /**
     * Filter, which Plugin to fetch.
     */
    where?: PluginWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Plugins to fetch.
     */
    orderBy?: PluginOrderByWithRelationInput | PluginOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Plugins.
     */
    cursor?: PluginWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Plugins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Plugins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Plugins.
     */
    distinct?: PluginScalarFieldEnum | PluginScalarFieldEnum[]
  }

  /**
   * Plugin findFirstOrThrow
   */
  export type PluginFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plugin
     */
    select?: PluginSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plugin
     */
    omit?: PluginOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PluginInclude<ExtArgs> | null
    /**
     * Filter, which Plugin to fetch.
     */
    where?: PluginWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Plugins to fetch.
     */
    orderBy?: PluginOrderByWithRelationInput | PluginOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Plugins.
     */
    cursor?: PluginWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Plugins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Plugins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Plugins.
     */
    distinct?: PluginScalarFieldEnum | PluginScalarFieldEnum[]
  }

  /**
   * Plugin findMany
   */
  export type PluginFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plugin
     */
    select?: PluginSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plugin
     */
    omit?: PluginOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PluginInclude<ExtArgs> | null
    /**
     * Filter, which Plugins to fetch.
     */
    where?: PluginWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Plugins to fetch.
     */
    orderBy?: PluginOrderByWithRelationInput | PluginOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Plugins.
     */
    cursor?: PluginWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Plugins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Plugins.
     */
    skip?: number
    distinct?: PluginScalarFieldEnum | PluginScalarFieldEnum[]
  }

  /**
   * Plugin create
   */
  export type PluginCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plugin
     */
    select?: PluginSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plugin
     */
    omit?: PluginOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PluginInclude<ExtArgs> | null
    /**
     * The data needed to create a Plugin.
     */
    data: XOR<PluginCreateInput, PluginUncheckedCreateInput>
  }

  /**
   * Plugin createMany
   */
  export type PluginCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Plugins.
     */
    data: PluginCreateManyInput | PluginCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Plugin createManyAndReturn
   */
  export type PluginCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plugin
     */
    select?: PluginSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Plugin
     */
    omit?: PluginOmit<ExtArgs> | null
    /**
     * The data used to create many Plugins.
     */
    data: PluginCreateManyInput | PluginCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PluginIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Plugin update
   */
  export type PluginUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plugin
     */
    select?: PluginSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plugin
     */
    omit?: PluginOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PluginInclude<ExtArgs> | null
    /**
     * The data needed to update a Plugin.
     */
    data: XOR<PluginUpdateInput, PluginUncheckedUpdateInput>
    /**
     * Choose, which Plugin to update.
     */
    where: PluginWhereUniqueInput
  }

  /**
   * Plugin updateMany
   */
  export type PluginUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Plugins.
     */
    data: XOR<PluginUpdateManyMutationInput, PluginUncheckedUpdateManyInput>
    /**
     * Filter which Plugins to update
     */
    where?: PluginWhereInput
    /**
     * Limit how many Plugins to update.
     */
    limit?: number
  }

  /**
   * Plugin updateManyAndReturn
   */
  export type PluginUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plugin
     */
    select?: PluginSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Plugin
     */
    omit?: PluginOmit<ExtArgs> | null
    /**
     * The data used to update Plugins.
     */
    data: XOR<PluginUpdateManyMutationInput, PluginUncheckedUpdateManyInput>
    /**
     * Filter which Plugins to update
     */
    where?: PluginWhereInput
    /**
     * Limit how many Plugins to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PluginIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Plugin upsert
   */
  export type PluginUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plugin
     */
    select?: PluginSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plugin
     */
    omit?: PluginOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PluginInclude<ExtArgs> | null
    /**
     * The filter to search for the Plugin to update in case it exists.
     */
    where: PluginWhereUniqueInput
    /**
     * In case the Plugin found by the `where` argument doesn't exist, create a new Plugin with this data.
     */
    create: XOR<PluginCreateInput, PluginUncheckedCreateInput>
    /**
     * In case the Plugin was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PluginUpdateInput, PluginUncheckedUpdateInput>
  }

  /**
   * Plugin delete
   */
  export type PluginDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plugin
     */
    select?: PluginSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plugin
     */
    omit?: PluginOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PluginInclude<ExtArgs> | null
    /**
     * Filter which Plugin to delete.
     */
    where: PluginWhereUniqueInput
  }

  /**
   * Plugin deleteMany
   */
  export type PluginDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Plugins to delete
     */
    where?: PluginWhereInput
    /**
     * Limit how many Plugins to delete.
     */
    limit?: number
  }

  /**
   * Plugin.agents
   */
  export type Plugin$agentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agent
     */
    select?: AgentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agent
     */
    omit?: AgentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentInclude<ExtArgs> | null
    where?: AgentWhereInput
    orderBy?: AgentOrderByWithRelationInput | AgentOrderByWithRelationInput[]
    cursor?: AgentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AgentScalarFieldEnum | AgentScalarFieldEnum[]
  }

  /**
   * Plugin.skills
   */
  export type Plugin$skillsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    where?: SkillWhereInput
    orderBy?: SkillOrderByWithRelationInput | SkillOrderByWithRelationInput[]
    cursor?: SkillWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SkillScalarFieldEnum | SkillScalarFieldEnum[]
  }

  /**
   * Plugin.commands
   */
  export type Plugin$commandsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Command
     */
    select?: CommandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Command
     */
    omit?: CommandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommandInclude<ExtArgs> | null
    where?: CommandWhereInput
    orderBy?: CommandOrderByWithRelationInput | CommandOrderByWithRelationInput[]
    cursor?: CommandWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommandScalarFieldEnum | CommandScalarFieldEnum[]
  }

  /**
   * Plugin without action
   */
  export type PluginDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plugin
     */
    select?: PluginSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plugin
     */
    omit?: PluginOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PluginInclude<ExtArgs> | null
  }


  /**
   * Model ScanStatus
   */

  export type AggregateScanStatus = {
    _count: ScanStatusCountAggregateOutputType | null
    _avg: ScanStatusAvgAggregateOutputType | null
    _sum: ScanStatusSumAggregateOutputType | null
    _min: ScanStatusMinAggregateOutputType | null
    _max: ScanStatusMaxAggregateOutputType | null
  }

  export type ScanStatusAvgAggregateOutputType = {
    itemCount: number | null
  }

  export type ScanStatusSumAggregateOutputType = {
    itemCount: number | null
  }

  export type ScanStatusMinAggregateOutputType = {
    id: string | null
    lastScan: Date | null
    itemCount: number | null
  }

  export type ScanStatusMaxAggregateOutputType = {
    id: string | null
    lastScan: Date | null
    itemCount: number | null
  }

  export type ScanStatusCountAggregateOutputType = {
    id: number
    lastScan: number
    itemCount: number
    _all: number
  }


  export type ScanStatusAvgAggregateInputType = {
    itemCount?: true
  }

  export type ScanStatusSumAggregateInputType = {
    itemCount?: true
  }

  export type ScanStatusMinAggregateInputType = {
    id?: true
    lastScan?: true
    itemCount?: true
  }

  export type ScanStatusMaxAggregateInputType = {
    id?: true
    lastScan?: true
    itemCount?: true
  }

  export type ScanStatusCountAggregateInputType = {
    id?: true
    lastScan?: true
    itemCount?: true
    _all?: true
  }

  export type ScanStatusAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ScanStatus to aggregate.
     */
    where?: ScanStatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ScanStatuses to fetch.
     */
    orderBy?: ScanStatusOrderByWithRelationInput | ScanStatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ScanStatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ScanStatuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ScanStatuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ScanStatuses
    **/
    _count?: true | ScanStatusCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ScanStatusAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ScanStatusSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ScanStatusMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ScanStatusMaxAggregateInputType
  }

  export type GetScanStatusAggregateType<T extends ScanStatusAggregateArgs> = {
        [P in keyof T & keyof AggregateScanStatus]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateScanStatus[P]>
      : GetScalarType<T[P], AggregateScanStatus[P]>
  }




  export type ScanStatusGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ScanStatusWhereInput
    orderBy?: ScanStatusOrderByWithAggregationInput | ScanStatusOrderByWithAggregationInput[]
    by: ScanStatusScalarFieldEnum[] | ScanStatusScalarFieldEnum
    having?: ScanStatusScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ScanStatusCountAggregateInputType | true
    _avg?: ScanStatusAvgAggregateInputType
    _sum?: ScanStatusSumAggregateInputType
    _min?: ScanStatusMinAggregateInputType
    _max?: ScanStatusMaxAggregateInputType
  }

  export type ScanStatusGroupByOutputType = {
    id: string
    lastScan: Date
    itemCount: number
    _count: ScanStatusCountAggregateOutputType | null
    _avg: ScanStatusAvgAggregateOutputType | null
    _sum: ScanStatusSumAggregateOutputType | null
    _min: ScanStatusMinAggregateOutputType | null
    _max: ScanStatusMaxAggregateOutputType | null
  }

  type GetScanStatusGroupByPayload<T extends ScanStatusGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ScanStatusGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ScanStatusGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ScanStatusGroupByOutputType[P]>
            : GetScalarType<T[P], ScanStatusGroupByOutputType[P]>
        }
      >
    >


  export type ScanStatusSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    lastScan?: boolean
    itemCount?: boolean
  }, ExtArgs["result"]["scanStatus"]>

  export type ScanStatusSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    lastScan?: boolean
    itemCount?: boolean
  }, ExtArgs["result"]["scanStatus"]>

  export type ScanStatusSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    lastScan?: boolean
    itemCount?: boolean
  }, ExtArgs["result"]["scanStatus"]>

  export type ScanStatusSelectScalar = {
    id?: boolean
    lastScan?: boolean
    itemCount?: boolean
  }

  export type ScanStatusOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "lastScan" | "itemCount", ExtArgs["result"]["scanStatus"]>

  export type $ScanStatusPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ScanStatus"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      lastScan: Date
      itemCount: number
    }, ExtArgs["result"]["scanStatus"]>
    composites: {}
  }

  type ScanStatusGetPayload<S extends boolean | null | undefined | ScanStatusDefaultArgs> = $Result.GetResult<Prisma.$ScanStatusPayload, S>

  type ScanStatusCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ScanStatusFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ScanStatusCountAggregateInputType | true
    }

  export interface ScanStatusDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ScanStatus'], meta: { name: 'ScanStatus' } }
    /**
     * Find zero or one ScanStatus that matches the filter.
     * @param {ScanStatusFindUniqueArgs} args - Arguments to find a ScanStatus
     * @example
     * // Get one ScanStatus
     * const scanStatus = await prisma.scanStatus.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ScanStatusFindUniqueArgs>(args: SelectSubset<T, ScanStatusFindUniqueArgs<ExtArgs>>): Prisma__ScanStatusClient<$Result.GetResult<Prisma.$ScanStatusPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ScanStatus that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ScanStatusFindUniqueOrThrowArgs} args - Arguments to find a ScanStatus
     * @example
     * // Get one ScanStatus
     * const scanStatus = await prisma.scanStatus.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ScanStatusFindUniqueOrThrowArgs>(args: SelectSubset<T, ScanStatusFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ScanStatusClient<$Result.GetResult<Prisma.$ScanStatusPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ScanStatus that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScanStatusFindFirstArgs} args - Arguments to find a ScanStatus
     * @example
     * // Get one ScanStatus
     * const scanStatus = await prisma.scanStatus.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ScanStatusFindFirstArgs>(args?: SelectSubset<T, ScanStatusFindFirstArgs<ExtArgs>>): Prisma__ScanStatusClient<$Result.GetResult<Prisma.$ScanStatusPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ScanStatus that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScanStatusFindFirstOrThrowArgs} args - Arguments to find a ScanStatus
     * @example
     * // Get one ScanStatus
     * const scanStatus = await prisma.scanStatus.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ScanStatusFindFirstOrThrowArgs>(args?: SelectSubset<T, ScanStatusFindFirstOrThrowArgs<ExtArgs>>): Prisma__ScanStatusClient<$Result.GetResult<Prisma.$ScanStatusPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ScanStatuses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScanStatusFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ScanStatuses
     * const scanStatuses = await prisma.scanStatus.findMany()
     * 
     * // Get first 10 ScanStatuses
     * const scanStatuses = await prisma.scanStatus.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const scanStatusWithIdOnly = await prisma.scanStatus.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ScanStatusFindManyArgs>(args?: SelectSubset<T, ScanStatusFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScanStatusPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ScanStatus.
     * @param {ScanStatusCreateArgs} args - Arguments to create a ScanStatus.
     * @example
     * // Create one ScanStatus
     * const ScanStatus = await prisma.scanStatus.create({
     *   data: {
     *     // ... data to create a ScanStatus
     *   }
     * })
     * 
     */
    create<T extends ScanStatusCreateArgs>(args: SelectSubset<T, ScanStatusCreateArgs<ExtArgs>>): Prisma__ScanStatusClient<$Result.GetResult<Prisma.$ScanStatusPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ScanStatuses.
     * @param {ScanStatusCreateManyArgs} args - Arguments to create many ScanStatuses.
     * @example
     * // Create many ScanStatuses
     * const scanStatus = await prisma.scanStatus.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ScanStatusCreateManyArgs>(args?: SelectSubset<T, ScanStatusCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ScanStatuses and returns the data saved in the database.
     * @param {ScanStatusCreateManyAndReturnArgs} args - Arguments to create many ScanStatuses.
     * @example
     * // Create many ScanStatuses
     * const scanStatus = await prisma.scanStatus.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ScanStatuses and only return the `id`
     * const scanStatusWithIdOnly = await prisma.scanStatus.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ScanStatusCreateManyAndReturnArgs>(args?: SelectSubset<T, ScanStatusCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScanStatusPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ScanStatus.
     * @param {ScanStatusDeleteArgs} args - Arguments to delete one ScanStatus.
     * @example
     * // Delete one ScanStatus
     * const ScanStatus = await prisma.scanStatus.delete({
     *   where: {
     *     // ... filter to delete one ScanStatus
     *   }
     * })
     * 
     */
    delete<T extends ScanStatusDeleteArgs>(args: SelectSubset<T, ScanStatusDeleteArgs<ExtArgs>>): Prisma__ScanStatusClient<$Result.GetResult<Prisma.$ScanStatusPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ScanStatus.
     * @param {ScanStatusUpdateArgs} args - Arguments to update one ScanStatus.
     * @example
     * // Update one ScanStatus
     * const scanStatus = await prisma.scanStatus.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ScanStatusUpdateArgs>(args: SelectSubset<T, ScanStatusUpdateArgs<ExtArgs>>): Prisma__ScanStatusClient<$Result.GetResult<Prisma.$ScanStatusPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ScanStatuses.
     * @param {ScanStatusDeleteManyArgs} args - Arguments to filter ScanStatuses to delete.
     * @example
     * // Delete a few ScanStatuses
     * const { count } = await prisma.scanStatus.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ScanStatusDeleteManyArgs>(args?: SelectSubset<T, ScanStatusDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ScanStatuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScanStatusUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ScanStatuses
     * const scanStatus = await prisma.scanStatus.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ScanStatusUpdateManyArgs>(args: SelectSubset<T, ScanStatusUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ScanStatuses and returns the data updated in the database.
     * @param {ScanStatusUpdateManyAndReturnArgs} args - Arguments to update many ScanStatuses.
     * @example
     * // Update many ScanStatuses
     * const scanStatus = await prisma.scanStatus.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ScanStatuses and only return the `id`
     * const scanStatusWithIdOnly = await prisma.scanStatus.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ScanStatusUpdateManyAndReturnArgs>(args: SelectSubset<T, ScanStatusUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScanStatusPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ScanStatus.
     * @param {ScanStatusUpsertArgs} args - Arguments to update or create a ScanStatus.
     * @example
     * // Update or create a ScanStatus
     * const scanStatus = await prisma.scanStatus.upsert({
     *   create: {
     *     // ... data to create a ScanStatus
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ScanStatus we want to update
     *   }
     * })
     */
    upsert<T extends ScanStatusUpsertArgs>(args: SelectSubset<T, ScanStatusUpsertArgs<ExtArgs>>): Prisma__ScanStatusClient<$Result.GetResult<Prisma.$ScanStatusPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ScanStatuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScanStatusCountArgs} args - Arguments to filter ScanStatuses to count.
     * @example
     * // Count the number of ScanStatuses
     * const count = await prisma.scanStatus.count({
     *   where: {
     *     // ... the filter for the ScanStatuses we want to count
     *   }
     * })
    **/
    count<T extends ScanStatusCountArgs>(
      args?: Subset<T, ScanStatusCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ScanStatusCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ScanStatus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScanStatusAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ScanStatusAggregateArgs>(args: Subset<T, ScanStatusAggregateArgs>): Prisma.PrismaPromise<GetScanStatusAggregateType<T>>

    /**
     * Group by ScanStatus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScanStatusGroupByArgs} args - Group by arguments.
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
      T extends ScanStatusGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ScanStatusGroupByArgs['orderBy'] }
        : { orderBy?: ScanStatusGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, ScanStatusGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetScanStatusGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ScanStatus model
   */
  readonly fields: ScanStatusFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ScanStatus.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ScanStatusClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ScanStatus model
   */
  interface ScanStatusFieldRefs {
    readonly id: FieldRef<"ScanStatus", 'String'>
    readonly lastScan: FieldRef<"ScanStatus", 'DateTime'>
    readonly itemCount: FieldRef<"ScanStatus", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * ScanStatus findUnique
   */
  export type ScanStatusFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScanStatus
     */
    select?: ScanStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScanStatus
     */
    omit?: ScanStatusOmit<ExtArgs> | null
    /**
     * Filter, which ScanStatus to fetch.
     */
    where: ScanStatusWhereUniqueInput
  }

  /**
   * ScanStatus findUniqueOrThrow
   */
  export type ScanStatusFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScanStatus
     */
    select?: ScanStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScanStatus
     */
    omit?: ScanStatusOmit<ExtArgs> | null
    /**
     * Filter, which ScanStatus to fetch.
     */
    where: ScanStatusWhereUniqueInput
  }

  /**
   * ScanStatus findFirst
   */
  export type ScanStatusFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScanStatus
     */
    select?: ScanStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScanStatus
     */
    omit?: ScanStatusOmit<ExtArgs> | null
    /**
     * Filter, which ScanStatus to fetch.
     */
    where?: ScanStatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ScanStatuses to fetch.
     */
    orderBy?: ScanStatusOrderByWithRelationInput | ScanStatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ScanStatuses.
     */
    cursor?: ScanStatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ScanStatuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ScanStatuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ScanStatuses.
     */
    distinct?: ScanStatusScalarFieldEnum | ScanStatusScalarFieldEnum[]
  }

  /**
   * ScanStatus findFirstOrThrow
   */
  export type ScanStatusFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScanStatus
     */
    select?: ScanStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScanStatus
     */
    omit?: ScanStatusOmit<ExtArgs> | null
    /**
     * Filter, which ScanStatus to fetch.
     */
    where?: ScanStatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ScanStatuses to fetch.
     */
    orderBy?: ScanStatusOrderByWithRelationInput | ScanStatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ScanStatuses.
     */
    cursor?: ScanStatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ScanStatuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ScanStatuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ScanStatuses.
     */
    distinct?: ScanStatusScalarFieldEnum | ScanStatusScalarFieldEnum[]
  }

  /**
   * ScanStatus findMany
   */
  export type ScanStatusFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScanStatus
     */
    select?: ScanStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScanStatus
     */
    omit?: ScanStatusOmit<ExtArgs> | null
    /**
     * Filter, which ScanStatuses to fetch.
     */
    where?: ScanStatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ScanStatuses to fetch.
     */
    orderBy?: ScanStatusOrderByWithRelationInput | ScanStatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ScanStatuses.
     */
    cursor?: ScanStatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ScanStatuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ScanStatuses.
     */
    skip?: number
    distinct?: ScanStatusScalarFieldEnum | ScanStatusScalarFieldEnum[]
  }

  /**
   * ScanStatus create
   */
  export type ScanStatusCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScanStatus
     */
    select?: ScanStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScanStatus
     */
    omit?: ScanStatusOmit<ExtArgs> | null
    /**
     * The data needed to create a ScanStatus.
     */
    data?: XOR<ScanStatusCreateInput, ScanStatusUncheckedCreateInput>
  }

  /**
   * ScanStatus createMany
   */
  export type ScanStatusCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ScanStatuses.
     */
    data: ScanStatusCreateManyInput | ScanStatusCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ScanStatus createManyAndReturn
   */
  export type ScanStatusCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScanStatus
     */
    select?: ScanStatusSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ScanStatus
     */
    omit?: ScanStatusOmit<ExtArgs> | null
    /**
     * The data used to create many ScanStatuses.
     */
    data: ScanStatusCreateManyInput | ScanStatusCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ScanStatus update
   */
  export type ScanStatusUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScanStatus
     */
    select?: ScanStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScanStatus
     */
    omit?: ScanStatusOmit<ExtArgs> | null
    /**
     * The data needed to update a ScanStatus.
     */
    data: XOR<ScanStatusUpdateInput, ScanStatusUncheckedUpdateInput>
    /**
     * Choose, which ScanStatus to update.
     */
    where: ScanStatusWhereUniqueInput
  }

  /**
   * ScanStatus updateMany
   */
  export type ScanStatusUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ScanStatuses.
     */
    data: XOR<ScanStatusUpdateManyMutationInput, ScanStatusUncheckedUpdateManyInput>
    /**
     * Filter which ScanStatuses to update
     */
    where?: ScanStatusWhereInput
    /**
     * Limit how many ScanStatuses to update.
     */
    limit?: number
  }

  /**
   * ScanStatus updateManyAndReturn
   */
  export type ScanStatusUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScanStatus
     */
    select?: ScanStatusSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ScanStatus
     */
    omit?: ScanStatusOmit<ExtArgs> | null
    /**
     * The data used to update ScanStatuses.
     */
    data: XOR<ScanStatusUpdateManyMutationInput, ScanStatusUncheckedUpdateManyInput>
    /**
     * Filter which ScanStatuses to update
     */
    where?: ScanStatusWhereInput
    /**
     * Limit how many ScanStatuses to update.
     */
    limit?: number
  }

  /**
   * ScanStatus upsert
   */
  export type ScanStatusUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScanStatus
     */
    select?: ScanStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScanStatus
     */
    omit?: ScanStatusOmit<ExtArgs> | null
    /**
     * The filter to search for the ScanStatus to update in case it exists.
     */
    where: ScanStatusWhereUniqueInput
    /**
     * In case the ScanStatus found by the `where` argument doesn't exist, create a new ScanStatus with this data.
     */
    create: XOR<ScanStatusCreateInput, ScanStatusUncheckedCreateInput>
    /**
     * In case the ScanStatus was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ScanStatusUpdateInput, ScanStatusUncheckedUpdateInput>
  }

  /**
   * ScanStatus delete
   */
  export type ScanStatusDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScanStatus
     */
    select?: ScanStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScanStatus
     */
    omit?: ScanStatusOmit<ExtArgs> | null
    /**
     * Filter which ScanStatus to delete.
     */
    where: ScanStatusWhereUniqueInput
  }

  /**
   * ScanStatus deleteMany
   */
  export type ScanStatusDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ScanStatuses to delete
     */
    where?: ScanStatusWhereInput
    /**
     * Limit how many ScanStatuses to delete.
     */
    limit?: number
  }

  /**
   * ScanStatus without action
   */
  export type ScanStatusDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScanStatus
     */
    select?: ScanStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScanStatus
     */
    omit?: ScanStatusOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const AccountScalarFieldEnum: {
    id: 'id',
    name: 'name',
    dirPath: 'dirPath'
  };

  export type AccountScalarFieldEnum = (typeof AccountScalarFieldEnum)[keyof typeof AccountScalarFieldEnum]


  export const ProjectScalarFieldEnum: {
    id: 'id',
    name: 'name',
    dirPath: 'dirPath'
  };

  export type ProjectScalarFieldEnum = (typeof ProjectScalarFieldEnum)[keyof typeof ProjectScalarFieldEnum]


  export const AgentScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    tools: 'tools',
    model: 'model',
    color: 'color',
    filePath: 'filePath',
    content: 'content',
    source: 'source',
    accountId: 'accountId',
    pluginId: 'pluginId'
  };

  export type AgentScalarFieldEnum = (typeof AgentScalarFieldEnum)[keyof typeof AgentScalarFieldEnum]


  export const SkillScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    author: 'author',
    version: 'version',
    dirPath: 'dirPath',
    content: 'content',
    source: 'source',
    hasExamples: 'hasExamples',
    hasScripts: 'hasScripts',
    accountId: 'accountId',
    pluginId: 'pluginId'
  };

  export type SkillScalarFieldEnum = (typeof SkillScalarFieldEnum)[keyof typeof SkillScalarFieldEnum]


  export const CommandScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    filePath: 'filePath',
    content: 'content',
    source: 'source',
    accountId: 'accountId',
    projectId: 'projectId',
    pluginId: 'pluginId'
  };

  export type CommandScalarFieldEnum = (typeof CommandScalarFieldEnum)[keyof typeof CommandScalarFieldEnum]


  export const PluginScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    author: 'author',
    category: 'category',
    dirPath: 'dirPath',
    accountId: 'accountId'
  };

  export type PluginScalarFieldEnum = (typeof PluginScalarFieldEnum)[keyof typeof PluginScalarFieldEnum]


  export const ScanStatusScalarFieldEnum: {
    id: 'id',
    lastScan: 'lastScan',
    itemCount: 'itemCount'
  };

  export type ScanStatusScalarFieldEnum = (typeof ScanStatusScalarFieldEnum)[keyof typeof ScanStatusScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type AccountWhereInput = {
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    id?: StringFilter<"Account"> | string
    name?: StringFilter<"Account"> | string
    dirPath?: StringFilter<"Account"> | string
    agents?: AgentListRelationFilter
    skills?: SkillListRelationFilter
    commands?: CommandListRelationFilter
    plugins?: PluginListRelationFilter
  }

  export type AccountOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    dirPath?: SortOrder
    agents?: AgentOrderByRelationAggregateInput
    skills?: SkillOrderByRelationAggregateInput
    commands?: CommandOrderByRelationAggregateInput
    plugins?: PluginOrderByRelationAggregateInput
  }

  export type AccountWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    dirPath?: string
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    name?: StringFilter<"Account"> | string
    agents?: AgentListRelationFilter
    skills?: SkillListRelationFilter
    commands?: CommandListRelationFilter
    plugins?: PluginListRelationFilter
  }, "id" | "dirPath">

  export type AccountOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    dirPath?: SortOrder
    _count?: AccountCountOrderByAggregateInput
    _max?: AccountMaxOrderByAggregateInput
    _min?: AccountMinOrderByAggregateInput
  }

  export type AccountScalarWhereWithAggregatesInput = {
    AND?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    OR?: AccountScalarWhereWithAggregatesInput[]
    NOT?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Account"> | string
    name?: StringWithAggregatesFilter<"Account"> | string
    dirPath?: StringWithAggregatesFilter<"Account"> | string
  }

  export type ProjectWhereInput = {
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    id?: StringFilter<"Project"> | string
    name?: StringFilter<"Project"> | string
    dirPath?: StringFilter<"Project"> | string
    commands?: CommandListRelationFilter
  }

  export type ProjectOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    dirPath?: SortOrder
    commands?: CommandOrderByRelationAggregateInput
  }

  export type ProjectWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    dirPath?: string
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    name?: StringFilter<"Project"> | string
    commands?: CommandListRelationFilter
  }, "id" | "dirPath">

  export type ProjectOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    dirPath?: SortOrder
    _count?: ProjectCountOrderByAggregateInput
    _max?: ProjectMaxOrderByAggregateInput
    _min?: ProjectMinOrderByAggregateInput
  }

  export type ProjectScalarWhereWithAggregatesInput = {
    AND?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[]
    OR?: ProjectScalarWhereWithAggregatesInput[]
    NOT?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Project"> | string
    name?: StringWithAggregatesFilter<"Project"> | string
    dirPath?: StringWithAggregatesFilter<"Project"> | string
  }

  export type AgentWhereInput = {
    AND?: AgentWhereInput | AgentWhereInput[]
    OR?: AgentWhereInput[]
    NOT?: AgentWhereInput | AgentWhereInput[]
    id?: StringFilter<"Agent"> | string
    name?: StringFilter<"Agent"> | string
    description?: StringNullableFilter<"Agent"> | string | null
    tools?: StringNullableFilter<"Agent"> | string | null
    model?: StringNullableFilter<"Agent"> | string | null
    color?: StringNullableFilter<"Agent"> | string | null
    filePath?: StringFilter<"Agent"> | string
    content?: StringFilter<"Agent"> | string
    source?: StringFilter<"Agent"> | string
    accountId?: StringFilter<"Agent"> | string
    pluginId?: StringNullableFilter<"Agent"> | string | null
    account?: XOR<AccountScalarRelationFilter, AccountWhereInput>
    plugin?: XOR<PluginNullableScalarRelationFilter, PluginWhereInput> | null
  }

  export type AgentOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    tools?: SortOrderInput | SortOrder
    model?: SortOrderInput | SortOrder
    color?: SortOrderInput | SortOrder
    filePath?: SortOrder
    content?: SortOrder
    source?: SortOrder
    accountId?: SortOrder
    pluginId?: SortOrderInput | SortOrder
    account?: AccountOrderByWithRelationInput
    plugin?: PluginOrderByWithRelationInput
  }

  export type AgentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    filePath?: string
    AND?: AgentWhereInput | AgentWhereInput[]
    OR?: AgentWhereInput[]
    NOT?: AgentWhereInput | AgentWhereInput[]
    name?: StringFilter<"Agent"> | string
    description?: StringNullableFilter<"Agent"> | string | null
    tools?: StringNullableFilter<"Agent"> | string | null
    model?: StringNullableFilter<"Agent"> | string | null
    color?: StringNullableFilter<"Agent"> | string | null
    content?: StringFilter<"Agent"> | string
    source?: StringFilter<"Agent"> | string
    accountId?: StringFilter<"Agent"> | string
    pluginId?: StringNullableFilter<"Agent"> | string | null
    account?: XOR<AccountScalarRelationFilter, AccountWhereInput>
    plugin?: XOR<PluginNullableScalarRelationFilter, PluginWhereInput> | null
  }, "id" | "filePath">

  export type AgentOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    tools?: SortOrderInput | SortOrder
    model?: SortOrderInput | SortOrder
    color?: SortOrderInput | SortOrder
    filePath?: SortOrder
    content?: SortOrder
    source?: SortOrder
    accountId?: SortOrder
    pluginId?: SortOrderInput | SortOrder
    _count?: AgentCountOrderByAggregateInput
    _max?: AgentMaxOrderByAggregateInput
    _min?: AgentMinOrderByAggregateInput
  }

  export type AgentScalarWhereWithAggregatesInput = {
    AND?: AgentScalarWhereWithAggregatesInput | AgentScalarWhereWithAggregatesInput[]
    OR?: AgentScalarWhereWithAggregatesInput[]
    NOT?: AgentScalarWhereWithAggregatesInput | AgentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Agent"> | string
    name?: StringWithAggregatesFilter<"Agent"> | string
    description?: StringNullableWithAggregatesFilter<"Agent"> | string | null
    tools?: StringNullableWithAggregatesFilter<"Agent"> | string | null
    model?: StringNullableWithAggregatesFilter<"Agent"> | string | null
    color?: StringNullableWithAggregatesFilter<"Agent"> | string | null
    filePath?: StringWithAggregatesFilter<"Agent"> | string
    content?: StringWithAggregatesFilter<"Agent"> | string
    source?: StringWithAggregatesFilter<"Agent"> | string
    accountId?: StringWithAggregatesFilter<"Agent"> | string
    pluginId?: StringNullableWithAggregatesFilter<"Agent"> | string | null
  }

  export type SkillWhereInput = {
    AND?: SkillWhereInput | SkillWhereInput[]
    OR?: SkillWhereInput[]
    NOT?: SkillWhereInput | SkillWhereInput[]
    id?: StringFilter<"Skill"> | string
    name?: StringFilter<"Skill"> | string
    description?: StringNullableFilter<"Skill"> | string | null
    author?: StringNullableFilter<"Skill"> | string | null
    version?: StringNullableFilter<"Skill"> | string | null
    dirPath?: StringFilter<"Skill"> | string
    content?: StringFilter<"Skill"> | string
    source?: StringFilter<"Skill"> | string
    hasExamples?: BoolFilter<"Skill"> | boolean
    hasScripts?: BoolFilter<"Skill"> | boolean
    accountId?: StringFilter<"Skill"> | string
    pluginId?: StringNullableFilter<"Skill"> | string | null
    account?: XOR<AccountScalarRelationFilter, AccountWhereInput>
    plugin?: XOR<PluginNullableScalarRelationFilter, PluginWhereInput> | null
  }

  export type SkillOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    author?: SortOrderInput | SortOrder
    version?: SortOrderInput | SortOrder
    dirPath?: SortOrder
    content?: SortOrder
    source?: SortOrder
    hasExamples?: SortOrder
    hasScripts?: SortOrder
    accountId?: SortOrder
    pluginId?: SortOrderInput | SortOrder
    account?: AccountOrderByWithRelationInput
    plugin?: PluginOrderByWithRelationInput
  }

  export type SkillWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    dirPath?: string
    AND?: SkillWhereInput | SkillWhereInput[]
    OR?: SkillWhereInput[]
    NOT?: SkillWhereInput | SkillWhereInput[]
    name?: StringFilter<"Skill"> | string
    description?: StringNullableFilter<"Skill"> | string | null
    author?: StringNullableFilter<"Skill"> | string | null
    version?: StringNullableFilter<"Skill"> | string | null
    content?: StringFilter<"Skill"> | string
    source?: StringFilter<"Skill"> | string
    hasExamples?: BoolFilter<"Skill"> | boolean
    hasScripts?: BoolFilter<"Skill"> | boolean
    accountId?: StringFilter<"Skill"> | string
    pluginId?: StringNullableFilter<"Skill"> | string | null
    account?: XOR<AccountScalarRelationFilter, AccountWhereInput>
    plugin?: XOR<PluginNullableScalarRelationFilter, PluginWhereInput> | null
  }, "id" | "dirPath">

  export type SkillOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    author?: SortOrderInput | SortOrder
    version?: SortOrderInput | SortOrder
    dirPath?: SortOrder
    content?: SortOrder
    source?: SortOrder
    hasExamples?: SortOrder
    hasScripts?: SortOrder
    accountId?: SortOrder
    pluginId?: SortOrderInput | SortOrder
    _count?: SkillCountOrderByAggregateInput
    _max?: SkillMaxOrderByAggregateInput
    _min?: SkillMinOrderByAggregateInput
  }

  export type SkillScalarWhereWithAggregatesInput = {
    AND?: SkillScalarWhereWithAggregatesInput | SkillScalarWhereWithAggregatesInput[]
    OR?: SkillScalarWhereWithAggregatesInput[]
    NOT?: SkillScalarWhereWithAggregatesInput | SkillScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Skill"> | string
    name?: StringWithAggregatesFilter<"Skill"> | string
    description?: StringNullableWithAggregatesFilter<"Skill"> | string | null
    author?: StringNullableWithAggregatesFilter<"Skill"> | string | null
    version?: StringNullableWithAggregatesFilter<"Skill"> | string | null
    dirPath?: StringWithAggregatesFilter<"Skill"> | string
    content?: StringWithAggregatesFilter<"Skill"> | string
    source?: StringWithAggregatesFilter<"Skill"> | string
    hasExamples?: BoolWithAggregatesFilter<"Skill"> | boolean
    hasScripts?: BoolWithAggregatesFilter<"Skill"> | boolean
    accountId?: StringWithAggregatesFilter<"Skill"> | string
    pluginId?: StringNullableWithAggregatesFilter<"Skill"> | string | null
  }

  export type CommandWhereInput = {
    AND?: CommandWhereInput | CommandWhereInput[]
    OR?: CommandWhereInput[]
    NOT?: CommandWhereInput | CommandWhereInput[]
    id?: StringFilter<"Command"> | string
    name?: StringFilter<"Command"> | string
    description?: StringNullableFilter<"Command"> | string | null
    filePath?: StringFilter<"Command"> | string
    content?: StringFilter<"Command"> | string
    source?: StringFilter<"Command"> | string
    accountId?: StringNullableFilter<"Command"> | string | null
    projectId?: StringNullableFilter<"Command"> | string | null
    pluginId?: StringNullableFilter<"Command"> | string | null
    account?: XOR<AccountNullableScalarRelationFilter, AccountWhereInput> | null
    project?: XOR<ProjectNullableScalarRelationFilter, ProjectWhereInput> | null
    plugin?: XOR<PluginNullableScalarRelationFilter, PluginWhereInput> | null
  }

  export type CommandOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    filePath?: SortOrder
    content?: SortOrder
    source?: SortOrder
    accountId?: SortOrderInput | SortOrder
    projectId?: SortOrderInput | SortOrder
    pluginId?: SortOrderInput | SortOrder
    account?: AccountOrderByWithRelationInput
    project?: ProjectOrderByWithRelationInput
    plugin?: PluginOrderByWithRelationInput
  }

  export type CommandWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    filePath?: string
    AND?: CommandWhereInput | CommandWhereInput[]
    OR?: CommandWhereInput[]
    NOT?: CommandWhereInput | CommandWhereInput[]
    name?: StringFilter<"Command"> | string
    description?: StringNullableFilter<"Command"> | string | null
    content?: StringFilter<"Command"> | string
    source?: StringFilter<"Command"> | string
    accountId?: StringNullableFilter<"Command"> | string | null
    projectId?: StringNullableFilter<"Command"> | string | null
    pluginId?: StringNullableFilter<"Command"> | string | null
    account?: XOR<AccountNullableScalarRelationFilter, AccountWhereInput> | null
    project?: XOR<ProjectNullableScalarRelationFilter, ProjectWhereInput> | null
    plugin?: XOR<PluginNullableScalarRelationFilter, PluginWhereInput> | null
  }, "id" | "filePath">

  export type CommandOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    filePath?: SortOrder
    content?: SortOrder
    source?: SortOrder
    accountId?: SortOrderInput | SortOrder
    projectId?: SortOrderInput | SortOrder
    pluginId?: SortOrderInput | SortOrder
    _count?: CommandCountOrderByAggregateInput
    _max?: CommandMaxOrderByAggregateInput
    _min?: CommandMinOrderByAggregateInput
  }

  export type CommandScalarWhereWithAggregatesInput = {
    AND?: CommandScalarWhereWithAggregatesInput | CommandScalarWhereWithAggregatesInput[]
    OR?: CommandScalarWhereWithAggregatesInput[]
    NOT?: CommandScalarWhereWithAggregatesInput | CommandScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Command"> | string
    name?: StringWithAggregatesFilter<"Command"> | string
    description?: StringNullableWithAggregatesFilter<"Command"> | string | null
    filePath?: StringWithAggregatesFilter<"Command"> | string
    content?: StringWithAggregatesFilter<"Command"> | string
    source?: StringWithAggregatesFilter<"Command"> | string
    accountId?: StringNullableWithAggregatesFilter<"Command"> | string | null
    projectId?: StringNullableWithAggregatesFilter<"Command"> | string | null
    pluginId?: StringNullableWithAggregatesFilter<"Command"> | string | null
  }

  export type PluginWhereInput = {
    AND?: PluginWhereInput | PluginWhereInput[]
    OR?: PluginWhereInput[]
    NOT?: PluginWhereInput | PluginWhereInput[]
    id?: StringFilter<"Plugin"> | string
    name?: StringFilter<"Plugin"> | string
    description?: StringNullableFilter<"Plugin"> | string | null
    author?: StringNullableFilter<"Plugin"> | string | null
    category?: StringNullableFilter<"Plugin"> | string | null
    dirPath?: StringFilter<"Plugin"> | string
    accountId?: StringFilter<"Plugin"> | string
    account?: XOR<AccountScalarRelationFilter, AccountWhereInput>
    agents?: AgentListRelationFilter
    skills?: SkillListRelationFilter
    commands?: CommandListRelationFilter
  }

  export type PluginOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    author?: SortOrderInput | SortOrder
    category?: SortOrderInput | SortOrder
    dirPath?: SortOrder
    accountId?: SortOrder
    account?: AccountOrderByWithRelationInput
    agents?: AgentOrderByRelationAggregateInput
    skills?: SkillOrderByRelationAggregateInput
    commands?: CommandOrderByRelationAggregateInput
  }

  export type PluginWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    dirPath?: string
    AND?: PluginWhereInput | PluginWhereInput[]
    OR?: PluginWhereInput[]
    NOT?: PluginWhereInput | PluginWhereInput[]
    name?: StringFilter<"Plugin"> | string
    description?: StringNullableFilter<"Plugin"> | string | null
    author?: StringNullableFilter<"Plugin"> | string | null
    category?: StringNullableFilter<"Plugin"> | string | null
    accountId?: StringFilter<"Plugin"> | string
    account?: XOR<AccountScalarRelationFilter, AccountWhereInput>
    agents?: AgentListRelationFilter
    skills?: SkillListRelationFilter
    commands?: CommandListRelationFilter
  }, "id" | "dirPath">

  export type PluginOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    author?: SortOrderInput | SortOrder
    category?: SortOrderInput | SortOrder
    dirPath?: SortOrder
    accountId?: SortOrder
    _count?: PluginCountOrderByAggregateInput
    _max?: PluginMaxOrderByAggregateInput
    _min?: PluginMinOrderByAggregateInput
  }

  export type PluginScalarWhereWithAggregatesInput = {
    AND?: PluginScalarWhereWithAggregatesInput | PluginScalarWhereWithAggregatesInput[]
    OR?: PluginScalarWhereWithAggregatesInput[]
    NOT?: PluginScalarWhereWithAggregatesInput | PluginScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Plugin"> | string
    name?: StringWithAggregatesFilter<"Plugin"> | string
    description?: StringNullableWithAggregatesFilter<"Plugin"> | string | null
    author?: StringNullableWithAggregatesFilter<"Plugin"> | string | null
    category?: StringNullableWithAggregatesFilter<"Plugin"> | string | null
    dirPath?: StringWithAggregatesFilter<"Plugin"> | string
    accountId?: StringWithAggregatesFilter<"Plugin"> | string
  }

  export type ScanStatusWhereInput = {
    AND?: ScanStatusWhereInput | ScanStatusWhereInput[]
    OR?: ScanStatusWhereInput[]
    NOT?: ScanStatusWhereInput | ScanStatusWhereInput[]
    id?: StringFilter<"ScanStatus"> | string
    lastScan?: DateTimeFilter<"ScanStatus"> | Date | string
    itemCount?: IntFilter<"ScanStatus"> | number
  }

  export type ScanStatusOrderByWithRelationInput = {
    id?: SortOrder
    lastScan?: SortOrder
    itemCount?: SortOrder
  }

  export type ScanStatusWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ScanStatusWhereInput | ScanStatusWhereInput[]
    OR?: ScanStatusWhereInput[]
    NOT?: ScanStatusWhereInput | ScanStatusWhereInput[]
    lastScan?: DateTimeFilter<"ScanStatus"> | Date | string
    itemCount?: IntFilter<"ScanStatus"> | number
  }, "id">

  export type ScanStatusOrderByWithAggregationInput = {
    id?: SortOrder
    lastScan?: SortOrder
    itemCount?: SortOrder
    _count?: ScanStatusCountOrderByAggregateInput
    _avg?: ScanStatusAvgOrderByAggregateInput
    _max?: ScanStatusMaxOrderByAggregateInput
    _min?: ScanStatusMinOrderByAggregateInput
    _sum?: ScanStatusSumOrderByAggregateInput
  }

  export type ScanStatusScalarWhereWithAggregatesInput = {
    AND?: ScanStatusScalarWhereWithAggregatesInput | ScanStatusScalarWhereWithAggregatesInput[]
    OR?: ScanStatusScalarWhereWithAggregatesInput[]
    NOT?: ScanStatusScalarWhereWithAggregatesInput | ScanStatusScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ScanStatus"> | string
    lastScan?: DateTimeWithAggregatesFilter<"ScanStatus"> | Date | string
    itemCount?: IntWithAggregatesFilter<"ScanStatus"> | number
  }

  export type AccountCreateInput = {
    id?: string
    name: string
    dirPath: string
    agents?: AgentCreateNestedManyWithoutAccountInput
    skills?: SkillCreateNestedManyWithoutAccountInput
    commands?: CommandCreateNestedManyWithoutAccountInput
    plugins?: PluginCreateNestedManyWithoutAccountInput
  }

  export type AccountUncheckedCreateInput = {
    id?: string
    name: string
    dirPath: string
    agents?: AgentUncheckedCreateNestedManyWithoutAccountInput
    skills?: SkillUncheckedCreateNestedManyWithoutAccountInput
    commands?: CommandUncheckedCreateNestedManyWithoutAccountInput
    plugins?: PluginUncheckedCreateNestedManyWithoutAccountInput
  }

  export type AccountUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    dirPath?: StringFieldUpdateOperationsInput | string
    agents?: AgentUpdateManyWithoutAccountNestedInput
    skills?: SkillUpdateManyWithoutAccountNestedInput
    commands?: CommandUpdateManyWithoutAccountNestedInput
    plugins?: PluginUpdateManyWithoutAccountNestedInput
  }

  export type AccountUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    dirPath?: StringFieldUpdateOperationsInput | string
    agents?: AgentUncheckedUpdateManyWithoutAccountNestedInput
    skills?: SkillUncheckedUpdateManyWithoutAccountNestedInput
    commands?: CommandUncheckedUpdateManyWithoutAccountNestedInput
    plugins?: PluginUncheckedUpdateManyWithoutAccountNestedInput
  }

  export type AccountCreateManyInput = {
    id?: string
    name: string
    dirPath: string
  }

  export type AccountUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    dirPath?: StringFieldUpdateOperationsInput | string
  }

  export type AccountUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    dirPath?: StringFieldUpdateOperationsInput | string
  }

  export type ProjectCreateInput = {
    id?: string
    name: string
    dirPath: string
    commands?: CommandCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateInput = {
    id?: string
    name: string
    dirPath: string
    commands?: CommandUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    dirPath?: StringFieldUpdateOperationsInput | string
    commands?: CommandUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    dirPath?: StringFieldUpdateOperationsInput | string
    commands?: CommandUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectCreateManyInput = {
    id?: string
    name: string
    dirPath: string
  }

  export type ProjectUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    dirPath?: StringFieldUpdateOperationsInput | string
  }

  export type ProjectUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    dirPath?: StringFieldUpdateOperationsInput | string
  }

  export type AgentCreateInput = {
    id?: string
    name: string
    description?: string | null
    tools?: string | null
    model?: string | null
    color?: string | null
    filePath: string
    content: string
    source?: string
    account: AccountCreateNestedOneWithoutAgentsInput
    plugin?: PluginCreateNestedOneWithoutAgentsInput
  }

  export type AgentUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    tools?: string | null
    model?: string | null
    color?: string | null
    filePath: string
    content: string
    source?: string
    accountId: string
    pluginId?: string | null
  }

  export type AgentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    tools?: NullableStringFieldUpdateOperationsInput | string | null
    model?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    filePath?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    account?: AccountUpdateOneRequiredWithoutAgentsNestedInput
    plugin?: PluginUpdateOneWithoutAgentsNestedInput
  }

  export type AgentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    tools?: NullableStringFieldUpdateOperationsInput | string | null
    model?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    filePath?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    pluginId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AgentCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    tools?: string | null
    model?: string | null
    color?: string | null
    filePath: string
    content: string
    source?: string
    accountId: string
    pluginId?: string | null
  }

  export type AgentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    tools?: NullableStringFieldUpdateOperationsInput | string | null
    model?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    filePath?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
  }

  export type AgentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    tools?: NullableStringFieldUpdateOperationsInput | string | null
    model?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    filePath?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    pluginId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SkillCreateInput = {
    id?: string
    name: string
    description?: string | null
    author?: string | null
    version?: string | null
    dirPath: string
    content: string
    source?: string
    hasExamples?: boolean
    hasScripts?: boolean
    account: AccountCreateNestedOneWithoutSkillsInput
    plugin?: PluginCreateNestedOneWithoutSkillsInput
  }

  export type SkillUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    author?: string | null
    version?: string | null
    dirPath: string
    content: string
    source?: string
    hasExamples?: boolean
    hasScripts?: boolean
    accountId: string
    pluginId?: string | null
  }

  export type SkillUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    author?: NullableStringFieldUpdateOperationsInput | string | null
    version?: NullableStringFieldUpdateOperationsInput | string | null
    dirPath?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    hasExamples?: BoolFieldUpdateOperationsInput | boolean
    hasScripts?: BoolFieldUpdateOperationsInput | boolean
    account?: AccountUpdateOneRequiredWithoutSkillsNestedInput
    plugin?: PluginUpdateOneWithoutSkillsNestedInput
  }

  export type SkillUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    author?: NullableStringFieldUpdateOperationsInput | string | null
    version?: NullableStringFieldUpdateOperationsInput | string | null
    dirPath?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    hasExamples?: BoolFieldUpdateOperationsInput | boolean
    hasScripts?: BoolFieldUpdateOperationsInput | boolean
    accountId?: StringFieldUpdateOperationsInput | string
    pluginId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SkillCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    author?: string | null
    version?: string | null
    dirPath: string
    content: string
    source?: string
    hasExamples?: boolean
    hasScripts?: boolean
    accountId: string
    pluginId?: string | null
  }

  export type SkillUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    author?: NullableStringFieldUpdateOperationsInput | string | null
    version?: NullableStringFieldUpdateOperationsInput | string | null
    dirPath?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    hasExamples?: BoolFieldUpdateOperationsInput | boolean
    hasScripts?: BoolFieldUpdateOperationsInput | boolean
  }

  export type SkillUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    author?: NullableStringFieldUpdateOperationsInput | string | null
    version?: NullableStringFieldUpdateOperationsInput | string | null
    dirPath?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    hasExamples?: BoolFieldUpdateOperationsInput | boolean
    hasScripts?: BoolFieldUpdateOperationsInput | boolean
    accountId?: StringFieldUpdateOperationsInput | string
    pluginId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CommandCreateInput = {
    id?: string
    name: string
    description?: string | null
    filePath: string
    content: string
    source?: string
    account?: AccountCreateNestedOneWithoutCommandsInput
    project?: ProjectCreateNestedOneWithoutCommandsInput
    plugin?: PluginCreateNestedOneWithoutCommandsInput
  }

  export type CommandUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    filePath: string
    content: string
    source?: string
    accountId?: string | null
    projectId?: string | null
    pluginId?: string | null
  }

  export type CommandUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    filePath?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    account?: AccountUpdateOneWithoutCommandsNestedInput
    project?: ProjectUpdateOneWithoutCommandsNestedInput
    plugin?: PluginUpdateOneWithoutCommandsNestedInput
  }

  export type CommandUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    filePath?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    accountId?: NullableStringFieldUpdateOperationsInput | string | null
    projectId?: NullableStringFieldUpdateOperationsInput | string | null
    pluginId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CommandCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    filePath: string
    content: string
    source?: string
    accountId?: string | null
    projectId?: string | null
    pluginId?: string | null
  }

  export type CommandUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    filePath?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
  }

  export type CommandUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    filePath?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    accountId?: NullableStringFieldUpdateOperationsInput | string | null
    projectId?: NullableStringFieldUpdateOperationsInput | string | null
    pluginId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PluginCreateInput = {
    id?: string
    name: string
    description?: string | null
    author?: string | null
    category?: string | null
    dirPath: string
    account: AccountCreateNestedOneWithoutPluginsInput
    agents?: AgentCreateNestedManyWithoutPluginInput
    skills?: SkillCreateNestedManyWithoutPluginInput
    commands?: CommandCreateNestedManyWithoutPluginInput
  }

  export type PluginUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    author?: string | null
    category?: string | null
    dirPath: string
    accountId: string
    agents?: AgentUncheckedCreateNestedManyWithoutPluginInput
    skills?: SkillUncheckedCreateNestedManyWithoutPluginInput
    commands?: CommandUncheckedCreateNestedManyWithoutPluginInput
  }

  export type PluginUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    author?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    dirPath?: StringFieldUpdateOperationsInput | string
    account?: AccountUpdateOneRequiredWithoutPluginsNestedInput
    agents?: AgentUpdateManyWithoutPluginNestedInput
    skills?: SkillUpdateManyWithoutPluginNestedInput
    commands?: CommandUpdateManyWithoutPluginNestedInput
  }

  export type PluginUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    author?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    dirPath?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    agents?: AgentUncheckedUpdateManyWithoutPluginNestedInput
    skills?: SkillUncheckedUpdateManyWithoutPluginNestedInput
    commands?: CommandUncheckedUpdateManyWithoutPluginNestedInput
  }

  export type PluginCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    author?: string | null
    category?: string | null
    dirPath: string
    accountId: string
  }

  export type PluginUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    author?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    dirPath?: StringFieldUpdateOperationsInput | string
  }

  export type PluginUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    author?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    dirPath?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
  }

  export type ScanStatusCreateInput = {
    id?: string
    lastScan?: Date | string
    itemCount?: number
  }

  export type ScanStatusUncheckedCreateInput = {
    id?: string
    lastScan?: Date | string
    itemCount?: number
  }

  export type ScanStatusUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    lastScan?: DateTimeFieldUpdateOperationsInput | Date | string
    itemCount?: IntFieldUpdateOperationsInput | number
  }

  export type ScanStatusUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    lastScan?: DateTimeFieldUpdateOperationsInput | Date | string
    itemCount?: IntFieldUpdateOperationsInput | number
  }

  export type ScanStatusCreateManyInput = {
    id?: string
    lastScan?: Date | string
    itemCount?: number
  }

  export type ScanStatusUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    lastScan?: DateTimeFieldUpdateOperationsInput | Date | string
    itemCount?: IntFieldUpdateOperationsInput | number
  }

  export type ScanStatusUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    lastScan?: DateTimeFieldUpdateOperationsInput | Date | string
    itemCount?: IntFieldUpdateOperationsInput | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type AgentListRelationFilter = {
    every?: AgentWhereInput
    some?: AgentWhereInput
    none?: AgentWhereInput
  }

  export type SkillListRelationFilter = {
    every?: SkillWhereInput
    some?: SkillWhereInput
    none?: SkillWhereInput
  }

  export type CommandListRelationFilter = {
    every?: CommandWhereInput
    some?: CommandWhereInput
    none?: CommandWhereInput
  }

  export type PluginListRelationFilter = {
    every?: PluginWhereInput
    some?: PluginWhereInput
    none?: PluginWhereInput
  }

  export type AgentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SkillOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CommandOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PluginOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AccountCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    dirPath?: SortOrder
  }

  export type AccountMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    dirPath?: SortOrder
  }

  export type AccountMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    dirPath?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type ProjectCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    dirPath?: SortOrder
  }

  export type ProjectMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    dirPath?: SortOrder
  }

  export type ProjectMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    dirPath?: SortOrder
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type AccountScalarRelationFilter = {
    is?: AccountWhereInput
    isNot?: AccountWhereInput
  }

  export type PluginNullableScalarRelationFilter = {
    is?: PluginWhereInput | null
    isNot?: PluginWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AgentCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    tools?: SortOrder
    model?: SortOrder
    color?: SortOrder
    filePath?: SortOrder
    content?: SortOrder
    source?: SortOrder
    accountId?: SortOrder
    pluginId?: SortOrder
  }

  export type AgentMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    tools?: SortOrder
    model?: SortOrder
    color?: SortOrder
    filePath?: SortOrder
    content?: SortOrder
    source?: SortOrder
    accountId?: SortOrder
    pluginId?: SortOrder
  }

  export type AgentMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    tools?: SortOrder
    model?: SortOrder
    color?: SortOrder
    filePath?: SortOrder
    content?: SortOrder
    source?: SortOrder
    accountId?: SortOrder
    pluginId?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type SkillCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    author?: SortOrder
    version?: SortOrder
    dirPath?: SortOrder
    content?: SortOrder
    source?: SortOrder
    hasExamples?: SortOrder
    hasScripts?: SortOrder
    accountId?: SortOrder
    pluginId?: SortOrder
  }

  export type SkillMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    author?: SortOrder
    version?: SortOrder
    dirPath?: SortOrder
    content?: SortOrder
    source?: SortOrder
    hasExamples?: SortOrder
    hasScripts?: SortOrder
    accountId?: SortOrder
    pluginId?: SortOrder
  }

  export type SkillMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    author?: SortOrder
    version?: SortOrder
    dirPath?: SortOrder
    content?: SortOrder
    source?: SortOrder
    hasExamples?: SortOrder
    hasScripts?: SortOrder
    accountId?: SortOrder
    pluginId?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type AccountNullableScalarRelationFilter = {
    is?: AccountWhereInput | null
    isNot?: AccountWhereInput | null
  }

  export type ProjectNullableScalarRelationFilter = {
    is?: ProjectWhereInput | null
    isNot?: ProjectWhereInput | null
  }

  export type CommandCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    filePath?: SortOrder
    content?: SortOrder
    source?: SortOrder
    accountId?: SortOrder
    projectId?: SortOrder
    pluginId?: SortOrder
  }

  export type CommandMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    filePath?: SortOrder
    content?: SortOrder
    source?: SortOrder
    accountId?: SortOrder
    projectId?: SortOrder
    pluginId?: SortOrder
  }

  export type CommandMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    filePath?: SortOrder
    content?: SortOrder
    source?: SortOrder
    accountId?: SortOrder
    projectId?: SortOrder
    pluginId?: SortOrder
  }

  export type PluginCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    author?: SortOrder
    category?: SortOrder
    dirPath?: SortOrder
    accountId?: SortOrder
  }

  export type PluginMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    author?: SortOrder
    category?: SortOrder
    dirPath?: SortOrder
    accountId?: SortOrder
  }

  export type PluginMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    author?: SortOrder
    category?: SortOrder
    dirPath?: SortOrder
    accountId?: SortOrder
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type ScanStatusCountOrderByAggregateInput = {
    id?: SortOrder
    lastScan?: SortOrder
    itemCount?: SortOrder
  }

  export type ScanStatusAvgOrderByAggregateInput = {
    itemCount?: SortOrder
  }

  export type ScanStatusMaxOrderByAggregateInput = {
    id?: SortOrder
    lastScan?: SortOrder
    itemCount?: SortOrder
  }

  export type ScanStatusMinOrderByAggregateInput = {
    id?: SortOrder
    lastScan?: SortOrder
    itemCount?: SortOrder
  }

  export type ScanStatusSumOrderByAggregateInput = {
    itemCount?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type AgentCreateNestedManyWithoutAccountInput = {
    create?: XOR<AgentCreateWithoutAccountInput, AgentUncheckedCreateWithoutAccountInput> | AgentCreateWithoutAccountInput[] | AgentUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: AgentCreateOrConnectWithoutAccountInput | AgentCreateOrConnectWithoutAccountInput[]
    createMany?: AgentCreateManyAccountInputEnvelope
    connect?: AgentWhereUniqueInput | AgentWhereUniqueInput[]
  }

  export type SkillCreateNestedManyWithoutAccountInput = {
    create?: XOR<SkillCreateWithoutAccountInput, SkillUncheckedCreateWithoutAccountInput> | SkillCreateWithoutAccountInput[] | SkillUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: SkillCreateOrConnectWithoutAccountInput | SkillCreateOrConnectWithoutAccountInput[]
    createMany?: SkillCreateManyAccountInputEnvelope
    connect?: SkillWhereUniqueInput | SkillWhereUniqueInput[]
  }

  export type CommandCreateNestedManyWithoutAccountInput = {
    create?: XOR<CommandCreateWithoutAccountInput, CommandUncheckedCreateWithoutAccountInput> | CommandCreateWithoutAccountInput[] | CommandUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: CommandCreateOrConnectWithoutAccountInput | CommandCreateOrConnectWithoutAccountInput[]
    createMany?: CommandCreateManyAccountInputEnvelope
    connect?: CommandWhereUniqueInput | CommandWhereUniqueInput[]
  }

  export type PluginCreateNestedManyWithoutAccountInput = {
    create?: XOR<PluginCreateWithoutAccountInput, PluginUncheckedCreateWithoutAccountInput> | PluginCreateWithoutAccountInput[] | PluginUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: PluginCreateOrConnectWithoutAccountInput | PluginCreateOrConnectWithoutAccountInput[]
    createMany?: PluginCreateManyAccountInputEnvelope
    connect?: PluginWhereUniqueInput | PluginWhereUniqueInput[]
  }

  export type AgentUncheckedCreateNestedManyWithoutAccountInput = {
    create?: XOR<AgentCreateWithoutAccountInput, AgentUncheckedCreateWithoutAccountInput> | AgentCreateWithoutAccountInput[] | AgentUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: AgentCreateOrConnectWithoutAccountInput | AgentCreateOrConnectWithoutAccountInput[]
    createMany?: AgentCreateManyAccountInputEnvelope
    connect?: AgentWhereUniqueInput | AgentWhereUniqueInput[]
  }

  export type SkillUncheckedCreateNestedManyWithoutAccountInput = {
    create?: XOR<SkillCreateWithoutAccountInput, SkillUncheckedCreateWithoutAccountInput> | SkillCreateWithoutAccountInput[] | SkillUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: SkillCreateOrConnectWithoutAccountInput | SkillCreateOrConnectWithoutAccountInput[]
    createMany?: SkillCreateManyAccountInputEnvelope
    connect?: SkillWhereUniqueInput | SkillWhereUniqueInput[]
  }

  export type CommandUncheckedCreateNestedManyWithoutAccountInput = {
    create?: XOR<CommandCreateWithoutAccountInput, CommandUncheckedCreateWithoutAccountInput> | CommandCreateWithoutAccountInput[] | CommandUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: CommandCreateOrConnectWithoutAccountInput | CommandCreateOrConnectWithoutAccountInput[]
    createMany?: CommandCreateManyAccountInputEnvelope
    connect?: CommandWhereUniqueInput | CommandWhereUniqueInput[]
  }

  export type PluginUncheckedCreateNestedManyWithoutAccountInput = {
    create?: XOR<PluginCreateWithoutAccountInput, PluginUncheckedCreateWithoutAccountInput> | PluginCreateWithoutAccountInput[] | PluginUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: PluginCreateOrConnectWithoutAccountInput | PluginCreateOrConnectWithoutAccountInput[]
    createMany?: PluginCreateManyAccountInputEnvelope
    connect?: PluginWhereUniqueInput | PluginWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type AgentUpdateManyWithoutAccountNestedInput = {
    create?: XOR<AgentCreateWithoutAccountInput, AgentUncheckedCreateWithoutAccountInput> | AgentCreateWithoutAccountInput[] | AgentUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: AgentCreateOrConnectWithoutAccountInput | AgentCreateOrConnectWithoutAccountInput[]
    upsert?: AgentUpsertWithWhereUniqueWithoutAccountInput | AgentUpsertWithWhereUniqueWithoutAccountInput[]
    createMany?: AgentCreateManyAccountInputEnvelope
    set?: AgentWhereUniqueInput | AgentWhereUniqueInput[]
    disconnect?: AgentWhereUniqueInput | AgentWhereUniqueInput[]
    delete?: AgentWhereUniqueInput | AgentWhereUniqueInput[]
    connect?: AgentWhereUniqueInput | AgentWhereUniqueInput[]
    update?: AgentUpdateWithWhereUniqueWithoutAccountInput | AgentUpdateWithWhereUniqueWithoutAccountInput[]
    updateMany?: AgentUpdateManyWithWhereWithoutAccountInput | AgentUpdateManyWithWhereWithoutAccountInput[]
    deleteMany?: AgentScalarWhereInput | AgentScalarWhereInput[]
  }

  export type SkillUpdateManyWithoutAccountNestedInput = {
    create?: XOR<SkillCreateWithoutAccountInput, SkillUncheckedCreateWithoutAccountInput> | SkillCreateWithoutAccountInput[] | SkillUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: SkillCreateOrConnectWithoutAccountInput | SkillCreateOrConnectWithoutAccountInput[]
    upsert?: SkillUpsertWithWhereUniqueWithoutAccountInput | SkillUpsertWithWhereUniqueWithoutAccountInput[]
    createMany?: SkillCreateManyAccountInputEnvelope
    set?: SkillWhereUniqueInput | SkillWhereUniqueInput[]
    disconnect?: SkillWhereUniqueInput | SkillWhereUniqueInput[]
    delete?: SkillWhereUniqueInput | SkillWhereUniqueInput[]
    connect?: SkillWhereUniqueInput | SkillWhereUniqueInput[]
    update?: SkillUpdateWithWhereUniqueWithoutAccountInput | SkillUpdateWithWhereUniqueWithoutAccountInput[]
    updateMany?: SkillUpdateManyWithWhereWithoutAccountInput | SkillUpdateManyWithWhereWithoutAccountInput[]
    deleteMany?: SkillScalarWhereInput | SkillScalarWhereInput[]
  }

  export type CommandUpdateManyWithoutAccountNestedInput = {
    create?: XOR<CommandCreateWithoutAccountInput, CommandUncheckedCreateWithoutAccountInput> | CommandCreateWithoutAccountInput[] | CommandUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: CommandCreateOrConnectWithoutAccountInput | CommandCreateOrConnectWithoutAccountInput[]
    upsert?: CommandUpsertWithWhereUniqueWithoutAccountInput | CommandUpsertWithWhereUniqueWithoutAccountInput[]
    createMany?: CommandCreateManyAccountInputEnvelope
    set?: CommandWhereUniqueInput | CommandWhereUniqueInput[]
    disconnect?: CommandWhereUniqueInput | CommandWhereUniqueInput[]
    delete?: CommandWhereUniqueInput | CommandWhereUniqueInput[]
    connect?: CommandWhereUniqueInput | CommandWhereUniqueInput[]
    update?: CommandUpdateWithWhereUniqueWithoutAccountInput | CommandUpdateWithWhereUniqueWithoutAccountInput[]
    updateMany?: CommandUpdateManyWithWhereWithoutAccountInput | CommandUpdateManyWithWhereWithoutAccountInput[]
    deleteMany?: CommandScalarWhereInput | CommandScalarWhereInput[]
  }

  export type PluginUpdateManyWithoutAccountNestedInput = {
    create?: XOR<PluginCreateWithoutAccountInput, PluginUncheckedCreateWithoutAccountInput> | PluginCreateWithoutAccountInput[] | PluginUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: PluginCreateOrConnectWithoutAccountInput | PluginCreateOrConnectWithoutAccountInput[]
    upsert?: PluginUpsertWithWhereUniqueWithoutAccountInput | PluginUpsertWithWhereUniqueWithoutAccountInput[]
    createMany?: PluginCreateManyAccountInputEnvelope
    set?: PluginWhereUniqueInput | PluginWhereUniqueInput[]
    disconnect?: PluginWhereUniqueInput | PluginWhereUniqueInput[]
    delete?: PluginWhereUniqueInput | PluginWhereUniqueInput[]
    connect?: PluginWhereUniqueInput | PluginWhereUniqueInput[]
    update?: PluginUpdateWithWhereUniqueWithoutAccountInput | PluginUpdateWithWhereUniqueWithoutAccountInput[]
    updateMany?: PluginUpdateManyWithWhereWithoutAccountInput | PluginUpdateManyWithWhereWithoutAccountInput[]
    deleteMany?: PluginScalarWhereInput | PluginScalarWhereInput[]
  }

  export type AgentUncheckedUpdateManyWithoutAccountNestedInput = {
    create?: XOR<AgentCreateWithoutAccountInput, AgentUncheckedCreateWithoutAccountInput> | AgentCreateWithoutAccountInput[] | AgentUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: AgentCreateOrConnectWithoutAccountInput | AgentCreateOrConnectWithoutAccountInput[]
    upsert?: AgentUpsertWithWhereUniqueWithoutAccountInput | AgentUpsertWithWhereUniqueWithoutAccountInput[]
    createMany?: AgentCreateManyAccountInputEnvelope
    set?: AgentWhereUniqueInput | AgentWhereUniqueInput[]
    disconnect?: AgentWhereUniqueInput | AgentWhereUniqueInput[]
    delete?: AgentWhereUniqueInput | AgentWhereUniqueInput[]
    connect?: AgentWhereUniqueInput | AgentWhereUniqueInput[]
    update?: AgentUpdateWithWhereUniqueWithoutAccountInput | AgentUpdateWithWhereUniqueWithoutAccountInput[]
    updateMany?: AgentUpdateManyWithWhereWithoutAccountInput | AgentUpdateManyWithWhereWithoutAccountInput[]
    deleteMany?: AgentScalarWhereInput | AgentScalarWhereInput[]
  }

  export type SkillUncheckedUpdateManyWithoutAccountNestedInput = {
    create?: XOR<SkillCreateWithoutAccountInput, SkillUncheckedCreateWithoutAccountInput> | SkillCreateWithoutAccountInput[] | SkillUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: SkillCreateOrConnectWithoutAccountInput | SkillCreateOrConnectWithoutAccountInput[]
    upsert?: SkillUpsertWithWhereUniqueWithoutAccountInput | SkillUpsertWithWhereUniqueWithoutAccountInput[]
    createMany?: SkillCreateManyAccountInputEnvelope
    set?: SkillWhereUniqueInput | SkillWhereUniqueInput[]
    disconnect?: SkillWhereUniqueInput | SkillWhereUniqueInput[]
    delete?: SkillWhereUniqueInput | SkillWhereUniqueInput[]
    connect?: SkillWhereUniqueInput | SkillWhereUniqueInput[]
    update?: SkillUpdateWithWhereUniqueWithoutAccountInput | SkillUpdateWithWhereUniqueWithoutAccountInput[]
    updateMany?: SkillUpdateManyWithWhereWithoutAccountInput | SkillUpdateManyWithWhereWithoutAccountInput[]
    deleteMany?: SkillScalarWhereInput | SkillScalarWhereInput[]
  }

  export type CommandUncheckedUpdateManyWithoutAccountNestedInput = {
    create?: XOR<CommandCreateWithoutAccountInput, CommandUncheckedCreateWithoutAccountInput> | CommandCreateWithoutAccountInput[] | CommandUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: CommandCreateOrConnectWithoutAccountInput | CommandCreateOrConnectWithoutAccountInput[]
    upsert?: CommandUpsertWithWhereUniqueWithoutAccountInput | CommandUpsertWithWhereUniqueWithoutAccountInput[]
    createMany?: CommandCreateManyAccountInputEnvelope
    set?: CommandWhereUniqueInput | CommandWhereUniqueInput[]
    disconnect?: CommandWhereUniqueInput | CommandWhereUniqueInput[]
    delete?: CommandWhereUniqueInput | CommandWhereUniqueInput[]
    connect?: CommandWhereUniqueInput | CommandWhereUniqueInput[]
    update?: CommandUpdateWithWhereUniqueWithoutAccountInput | CommandUpdateWithWhereUniqueWithoutAccountInput[]
    updateMany?: CommandUpdateManyWithWhereWithoutAccountInput | CommandUpdateManyWithWhereWithoutAccountInput[]
    deleteMany?: CommandScalarWhereInput | CommandScalarWhereInput[]
  }

  export type PluginUncheckedUpdateManyWithoutAccountNestedInput = {
    create?: XOR<PluginCreateWithoutAccountInput, PluginUncheckedCreateWithoutAccountInput> | PluginCreateWithoutAccountInput[] | PluginUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: PluginCreateOrConnectWithoutAccountInput | PluginCreateOrConnectWithoutAccountInput[]
    upsert?: PluginUpsertWithWhereUniqueWithoutAccountInput | PluginUpsertWithWhereUniqueWithoutAccountInput[]
    createMany?: PluginCreateManyAccountInputEnvelope
    set?: PluginWhereUniqueInput | PluginWhereUniqueInput[]
    disconnect?: PluginWhereUniqueInput | PluginWhereUniqueInput[]
    delete?: PluginWhereUniqueInput | PluginWhereUniqueInput[]
    connect?: PluginWhereUniqueInput | PluginWhereUniqueInput[]
    update?: PluginUpdateWithWhereUniqueWithoutAccountInput | PluginUpdateWithWhereUniqueWithoutAccountInput[]
    updateMany?: PluginUpdateManyWithWhereWithoutAccountInput | PluginUpdateManyWithWhereWithoutAccountInput[]
    deleteMany?: PluginScalarWhereInput | PluginScalarWhereInput[]
  }

  export type CommandCreateNestedManyWithoutProjectInput = {
    create?: XOR<CommandCreateWithoutProjectInput, CommandUncheckedCreateWithoutProjectInput> | CommandCreateWithoutProjectInput[] | CommandUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: CommandCreateOrConnectWithoutProjectInput | CommandCreateOrConnectWithoutProjectInput[]
    createMany?: CommandCreateManyProjectInputEnvelope
    connect?: CommandWhereUniqueInput | CommandWhereUniqueInput[]
  }

  export type CommandUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<CommandCreateWithoutProjectInput, CommandUncheckedCreateWithoutProjectInput> | CommandCreateWithoutProjectInput[] | CommandUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: CommandCreateOrConnectWithoutProjectInput | CommandCreateOrConnectWithoutProjectInput[]
    createMany?: CommandCreateManyProjectInputEnvelope
    connect?: CommandWhereUniqueInput | CommandWhereUniqueInput[]
  }

  export type CommandUpdateManyWithoutProjectNestedInput = {
    create?: XOR<CommandCreateWithoutProjectInput, CommandUncheckedCreateWithoutProjectInput> | CommandCreateWithoutProjectInput[] | CommandUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: CommandCreateOrConnectWithoutProjectInput | CommandCreateOrConnectWithoutProjectInput[]
    upsert?: CommandUpsertWithWhereUniqueWithoutProjectInput | CommandUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: CommandCreateManyProjectInputEnvelope
    set?: CommandWhereUniqueInput | CommandWhereUniqueInput[]
    disconnect?: CommandWhereUniqueInput | CommandWhereUniqueInput[]
    delete?: CommandWhereUniqueInput | CommandWhereUniqueInput[]
    connect?: CommandWhereUniqueInput | CommandWhereUniqueInput[]
    update?: CommandUpdateWithWhereUniqueWithoutProjectInput | CommandUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: CommandUpdateManyWithWhereWithoutProjectInput | CommandUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: CommandScalarWhereInput | CommandScalarWhereInput[]
  }

  export type CommandUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<CommandCreateWithoutProjectInput, CommandUncheckedCreateWithoutProjectInput> | CommandCreateWithoutProjectInput[] | CommandUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: CommandCreateOrConnectWithoutProjectInput | CommandCreateOrConnectWithoutProjectInput[]
    upsert?: CommandUpsertWithWhereUniqueWithoutProjectInput | CommandUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: CommandCreateManyProjectInputEnvelope
    set?: CommandWhereUniqueInput | CommandWhereUniqueInput[]
    disconnect?: CommandWhereUniqueInput | CommandWhereUniqueInput[]
    delete?: CommandWhereUniqueInput | CommandWhereUniqueInput[]
    connect?: CommandWhereUniqueInput | CommandWhereUniqueInput[]
    update?: CommandUpdateWithWhereUniqueWithoutProjectInput | CommandUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: CommandUpdateManyWithWhereWithoutProjectInput | CommandUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: CommandScalarWhereInput | CommandScalarWhereInput[]
  }

  export type AccountCreateNestedOneWithoutAgentsInput = {
    create?: XOR<AccountCreateWithoutAgentsInput, AccountUncheckedCreateWithoutAgentsInput>
    connectOrCreate?: AccountCreateOrConnectWithoutAgentsInput
    connect?: AccountWhereUniqueInput
  }

  export type PluginCreateNestedOneWithoutAgentsInput = {
    create?: XOR<PluginCreateWithoutAgentsInput, PluginUncheckedCreateWithoutAgentsInput>
    connectOrCreate?: PluginCreateOrConnectWithoutAgentsInput
    connect?: PluginWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type AccountUpdateOneRequiredWithoutAgentsNestedInput = {
    create?: XOR<AccountCreateWithoutAgentsInput, AccountUncheckedCreateWithoutAgentsInput>
    connectOrCreate?: AccountCreateOrConnectWithoutAgentsInput
    upsert?: AccountUpsertWithoutAgentsInput
    connect?: AccountWhereUniqueInput
    update?: XOR<XOR<AccountUpdateToOneWithWhereWithoutAgentsInput, AccountUpdateWithoutAgentsInput>, AccountUncheckedUpdateWithoutAgentsInput>
  }

  export type PluginUpdateOneWithoutAgentsNestedInput = {
    create?: XOR<PluginCreateWithoutAgentsInput, PluginUncheckedCreateWithoutAgentsInput>
    connectOrCreate?: PluginCreateOrConnectWithoutAgentsInput
    upsert?: PluginUpsertWithoutAgentsInput
    disconnect?: PluginWhereInput | boolean
    delete?: PluginWhereInput | boolean
    connect?: PluginWhereUniqueInput
    update?: XOR<XOR<PluginUpdateToOneWithWhereWithoutAgentsInput, PluginUpdateWithoutAgentsInput>, PluginUncheckedUpdateWithoutAgentsInput>
  }

  export type AccountCreateNestedOneWithoutSkillsInput = {
    create?: XOR<AccountCreateWithoutSkillsInput, AccountUncheckedCreateWithoutSkillsInput>
    connectOrCreate?: AccountCreateOrConnectWithoutSkillsInput
    connect?: AccountWhereUniqueInput
  }

  export type PluginCreateNestedOneWithoutSkillsInput = {
    create?: XOR<PluginCreateWithoutSkillsInput, PluginUncheckedCreateWithoutSkillsInput>
    connectOrCreate?: PluginCreateOrConnectWithoutSkillsInput
    connect?: PluginWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type AccountUpdateOneRequiredWithoutSkillsNestedInput = {
    create?: XOR<AccountCreateWithoutSkillsInput, AccountUncheckedCreateWithoutSkillsInput>
    connectOrCreate?: AccountCreateOrConnectWithoutSkillsInput
    upsert?: AccountUpsertWithoutSkillsInput
    connect?: AccountWhereUniqueInput
    update?: XOR<XOR<AccountUpdateToOneWithWhereWithoutSkillsInput, AccountUpdateWithoutSkillsInput>, AccountUncheckedUpdateWithoutSkillsInput>
  }

  export type PluginUpdateOneWithoutSkillsNestedInput = {
    create?: XOR<PluginCreateWithoutSkillsInput, PluginUncheckedCreateWithoutSkillsInput>
    connectOrCreate?: PluginCreateOrConnectWithoutSkillsInput
    upsert?: PluginUpsertWithoutSkillsInput
    disconnect?: PluginWhereInput | boolean
    delete?: PluginWhereInput | boolean
    connect?: PluginWhereUniqueInput
    update?: XOR<XOR<PluginUpdateToOneWithWhereWithoutSkillsInput, PluginUpdateWithoutSkillsInput>, PluginUncheckedUpdateWithoutSkillsInput>
  }

  export type AccountCreateNestedOneWithoutCommandsInput = {
    create?: XOR<AccountCreateWithoutCommandsInput, AccountUncheckedCreateWithoutCommandsInput>
    connectOrCreate?: AccountCreateOrConnectWithoutCommandsInput
    connect?: AccountWhereUniqueInput
  }

  export type ProjectCreateNestedOneWithoutCommandsInput = {
    create?: XOR<ProjectCreateWithoutCommandsInput, ProjectUncheckedCreateWithoutCommandsInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutCommandsInput
    connect?: ProjectWhereUniqueInput
  }

  export type PluginCreateNestedOneWithoutCommandsInput = {
    create?: XOR<PluginCreateWithoutCommandsInput, PluginUncheckedCreateWithoutCommandsInput>
    connectOrCreate?: PluginCreateOrConnectWithoutCommandsInput
    connect?: PluginWhereUniqueInput
  }

  export type AccountUpdateOneWithoutCommandsNestedInput = {
    create?: XOR<AccountCreateWithoutCommandsInput, AccountUncheckedCreateWithoutCommandsInput>
    connectOrCreate?: AccountCreateOrConnectWithoutCommandsInput
    upsert?: AccountUpsertWithoutCommandsInput
    disconnect?: AccountWhereInput | boolean
    delete?: AccountWhereInput | boolean
    connect?: AccountWhereUniqueInput
    update?: XOR<XOR<AccountUpdateToOneWithWhereWithoutCommandsInput, AccountUpdateWithoutCommandsInput>, AccountUncheckedUpdateWithoutCommandsInput>
  }

  export type ProjectUpdateOneWithoutCommandsNestedInput = {
    create?: XOR<ProjectCreateWithoutCommandsInput, ProjectUncheckedCreateWithoutCommandsInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutCommandsInput
    upsert?: ProjectUpsertWithoutCommandsInput
    disconnect?: ProjectWhereInput | boolean
    delete?: ProjectWhereInput | boolean
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutCommandsInput, ProjectUpdateWithoutCommandsInput>, ProjectUncheckedUpdateWithoutCommandsInput>
  }

  export type PluginUpdateOneWithoutCommandsNestedInput = {
    create?: XOR<PluginCreateWithoutCommandsInput, PluginUncheckedCreateWithoutCommandsInput>
    connectOrCreate?: PluginCreateOrConnectWithoutCommandsInput
    upsert?: PluginUpsertWithoutCommandsInput
    disconnect?: PluginWhereInput | boolean
    delete?: PluginWhereInput | boolean
    connect?: PluginWhereUniqueInput
    update?: XOR<XOR<PluginUpdateToOneWithWhereWithoutCommandsInput, PluginUpdateWithoutCommandsInput>, PluginUncheckedUpdateWithoutCommandsInput>
  }

  export type AccountCreateNestedOneWithoutPluginsInput = {
    create?: XOR<AccountCreateWithoutPluginsInput, AccountUncheckedCreateWithoutPluginsInput>
    connectOrCreate?: AccountCreateOrConnectWithoutPluginsInput
    connect?: AccountWhereUniqueInput
  }

  export type AgentCreateNestedManyWithoutPluginInput = {
    create?: XOR<AgentCreateWithoutPluginInput, AgentUncheckedCreateWithoutPluginInput> | AgentCreateWithoutPluginInput[] | AgentUncheckedCreateWithoutPluginInput[]
    connectOrCreate?: AgentCreateOrConnectWithoutPluginInput | AgentCreateOrConnectWithoutPluginInput[]
    createMany?: AgentCreateManyPluginInputEnvelope
    connect?: AgentWhereUniqueInput | AgentWhereUniqueInput[]
  }

  export type SkillCreateNestedManyWithoutPluginInput = {
    create?: XOR<SkillCreateWithoutPluginInput, SkillUncheckedCreateWithoutPluginInput> | SkillCreateWithoutPluginInput[] | SkillUncheckedCreateWithoutPluginInput[]
    connectOrCreate?: SkillCreateOrConnectWithoutPluginInput | SkillCreateOrConnectWithoutPluginInput[]
    createMany?: SkillCreateManyPluginInputEnvelope
    connect?: SkillWhereUniqueInput | SkillWhereUniqueInput[]
  }

  export type CommandCreateNestedManyWithoutPluginInput = {
    create?: XOR<CommandCreateWithoutPluginInput, CommandUncheckedCreateWithoutPluginInput> | CommandCreateWithoutPluginInput[] | CommandUncheckedCreateWithoutPluginInput[]
    connectOrCreate?: CommandCreateOrConnectWithoutPluginInput | CommandCreateOrConnectWithoutPluginInput[]
    createMany?: CommandCreateManyPluginInputEnvelope
    connect?: CommandWhereUniqueInput | CommandWhereUniqueInput[]
  }

  export type AgentUncheckedCreateNestedManyWithoutPluginInput = {
    create?: XOR<AgentCreateWithoutPluginInput, AgentUncheckedCreateWithoutPluginInput> | AgentCreateWithoutPluginInput[] | AgentUncheckedCreateWithoutPluginInput[]
    connectOrCreate?: AgentCreateOrConnectWithoutPluginInput | AgentCreateOrConnectWithoutPluginInput[]
    createMany?: AgentCreateManyPluginInputEnvelope
    connect?: AgentWhereUniqueInput | AgentWhereUniqueInput[]
  }

  export type SkillUncheckedCreateNestedManyWithoutPluginInput = {
    create?: XOR<SkillCreateWithoutPluginInput, SkillUncheckedCreateWithoutPluginInput> | SkillCreateWithoutPluginInput[] | SkillUncheckedCreateWithoutPluginInput[]
    connectOrCreate?: SkillCreateOrConnectWithoutPluginInput | SkillCreateOrConnectWithoutPluginInput[]
    createMany?: SkillCreateManyPluginInputEnvelope
    connect?: SkillWhereUniqueInput | SkillWhereUniqueInput[]
  }

  export type CommandUncheckedCreateNestedManyWithoutPluginInput = {
    create?: XOR<CommandCreateWithoutPluginInput, CommandUncheckedCreateWithoutPluginInput> | CommandCreateWithoutPluginInput[] | CommandUncheckedCreateWithoutPluginInput[]
    connectOrCreate?: CommandCreateOrConnectWithoutPluginInput | CommandCreateOrConnectWithoutPluginInput[]
    createMany?: CommandCreateManyPluginInputEnvelope
    connect?: CommandWhereUniqueInput | CommandWhereUniqueInput[]
  }

  export type AccountUpdateOneRequiredWithoutPluginsNestedInput = {
    create?: XOR<AccountCreateWithoutPluginsInput, AccountUncheckedCreateWithoutPluginsInput>
    connectOrCreate?: AccountCreateOrConnectWithoutPluginsInput
    upsert?: AccountUpsertWithoutPluginsInput
    connect?: AccountWhereUniqueInput
    update?: XOR<XOR<AccountUpdateToOneWithWhereWithoutPluginsInput, AccountUpdateWithoutPluginsInput>, AccountUncheckedUpdateWithoutPluginsInput>
  }

  export type AgentUpdateManyWithoutPluginNestedInput = {
    create?: XOR<AgentCreateWithoutPluginInput, AgentUncheckedCreateWithoutPluginInput> | AgentCreateWithoutPluginInput[] | AgentUncheckedCreateWithoutPluginInput[]
    connectOrCreate?: AgentCreateOrConnectWithoutPluginInput | AgentCreateOrConnectWithoutPluginInput[]
    upsert?: AgentUpsertWithWhereUniqueWithoutPluginInput | AgentUpsertWithWhereUniqueWithoutPluginInput[]
    createMany?: AgentCreateManyPluginInputEnvelope
    set?: AgentWhereUniqueInput | AgentWhereUniqueInput[]
    disconnect?: AgentWhereUniqueInput | AgentWhereUniqueInput[]
    delete?: AgentWhereUniqueInput | AgentWhereUniqueInput[]
    connect?: AgentWhereUniqueInput | AgentWhereUniqueInput[]
    update?: AgentUpdateWithWhereUniqueWithoutPluginInput | AgentUpdateWithWhereUniqueWithoutPluginInput[]
    updateMany?: AgentUpdateManyWithWhereWithoutPluginInput | AgentUpdateManyWithWhereWithoutPluginInput[]
    deleteMany?: AgentScalarWhereInput | AgentScalarWhereInput[]
  }

  export type SkillUpdateManyWithoutPluginNestedInput = {
    create?: XOR<SkillCreateWithoutPluginInput, SkillUncheckedCreateWithoutPluginInput> | SkillCreateWithoutPluginInput[] | SkillUncheckedCreateWithoutPluginInput[]
    connectOrCreate?: SkillCreateOrConnectWithoutPluginInput | SkillCreateOrConnectWithoutPluginInput[]
    upsert?: SkillUpsertWithWhereUniqueWithoutPluginInput | SkillUpsertWithWhereUniqueWithoutPluginInput[]
    createMany?: SkillCreateManyPluginInputEnvelope
    set?: SkillWhereUniqueInput | SkillWhereUniqueInput[]
    disconnect?: SkillWhereUniqueInput | SkillWhereUniqueInput[]
    delete?: SkillWhereUniqueInput | SkillWhereUniqueInput[]
    connect?: SkillWhereUniqueInput | SkillWhereUniqueInput[]
    update?: SkillUpdateWithWhereUniqueWithoutPluginInput | SkillUpdateWithWhereUniqueWithoutPluginInput[]
    updateMany?: SkillUpdateManyWithWhereWithoutPluginInput | SkillUpdateManyWithWhereWithoutPluginInput[]
    deleteMany?: SkillScalarWhereInput | SkillScalarWhereInput[]
  }

  export type CommandUpdateManyWithoutPluginNestedInput = {
    create?: XOR<CommandCreateWithoutPluginInput, CommandUncheckedCreateWithoutPluginInput> | CommandCreateWithoutPluginInput[] | CommandUncheckedCreateWithoutPluginInput[]
    connectOrCreate?: CommandCreateOrConnectWithoutPluginInput | CommandCreateOrConnectWithoutPluginInput[]
    upsert?: CommandUpsertWithWhereUniqueWithoutPluginInput | CommandUpsertWithWhereUniqueWithoutPluginInput[]
    createMany?: CommandCreateManyPluginInputEnvelope
    set?: CommandWhereUniqueInput | CommandWhereUniqueInput[]
    disconnect?: CommandWhereUniqueInput | CommandWhereUniqueInput[]
    delete?: CommandWhereUniqueInput | CommandWhereUniqueInput[]
    connect?: CommandWhereUniqueInput | CommandWhereUniqueInput[]
    update?: CommandUpdateWithWhereUniqueWithoutPluginInput | CommandUpdateWithWhereUniqueWithoutPluginInput[]
    updateMany?: CommandUpdateManyWithWhereWithoutPluginInput | CommandUpdateManyWithWhereWithoutPluginInput[]
    deleteMany?: CommandScalarWhereInput | CommandScalarWhereInput[]
  }

  export type AgentUncheckedUpdateManyWithoutPluginNestedInput = {
    create?: XOR<AgentCreateWithoutPluginInput, AgentUncheckedCreateWithoutPluginInput> | AgentCreateWithoutPluginInput[] | AgentUncheckedCreateWithoutPluginInput[]
    connectOrCreate?: AgentCreateOrConnectWithoutPluginInput | AgentCreateOrConnectWithoutPluginInput[]
    upsert?: AgentUpsertWithWhereUniqueWithoutPluginInput | AgentUpsertWithWhereUniqueWithoutPluginInput[]
    createMany?: AgentCreateManyPluginInputEnvelope
    set?: AgentWhereUniqueInput | AgentWhereUniqueInput[]
    disconnect?: AgentWhereUniqueInput | AgentWhereUniqueInput[]
    delete?: AgentWhereUniqueInput | AgentWhereUniqueInput[]
    connect?: AgentWhereUniqueInput | AgentWhereUniqueInput[]
    update?: AgentUpdateWithWhereUniqueWithoutPluginInput | AgentUpdateWithWhereUniqueWithoutPluginInput[]
    updateMany?: AgentUpdateManyWithWhereWithoutPluginInput | AgentUpdateManyWithWhereWithoutPluginInput[]
    deleteMany?: AgentScalarWhereInput | AgentScalarWhereInput[]
  }

  export type SkillUncheckedUpdateManyWithoutPluginNestedInput = {
    create?: XOR<SkillCreateWithoutPluginInput, SkillUncheckedCreateWithoutPluginInput> | SkillCreateWithoutPluginInput[] | SkillUncheckedCreateWithoutPluginInput[]
    connectOrCreate?: SkillCreateOrConnectWithoutPluginInput | SkillCreateOrConnectWithoutPluginInput[]
    upsert?: SkillUpsertWithWhereUniqueWithoutPluginInput | SkillUpsertWithWhereUniqueWithoutPluginInput[]
    createMany?: SkillCreateManyPluginInputEnvelope
    set?: SkillWhereUniqueInput | SkillWhereUniqueInput[]
    disconnect?: SkillWhereUniqueInput | SkillWhereUniqueInput[]
    delete?: SkillWhereUniqueInput | SkillWhereUniqueInput[]
    connect?: SkillWhereUniqueInput | SkillWhereUniqueInput[]
    update?: SkillUpdateWithWhereUniqueWithoutPluginInput | SkillUpdateWithWhereUniqueWithoutPluginInput[]
    updateMany?: SkillUpdateManyWithWhereWithoutPluginInput | SkillUpdateManyWithWhereWithoutPluginInput[]
    deleteMany?: SkillScalarWhereInput | SkillScalarWhereInput[]
  }

  export type CommandUncheckedUpdateManyWithoutPluginNestedInput = {
    create?: XOR<CommandCreateWithoutPluginInput, CommandUncheckedCreateWithoutPluginInput> | CommandCreateWithoutPluginInput[] | CommandUncheckedCreateWithoutPluginInput[]
    connectOrCreate?: CommandCreateOrConnectWithoutPluginInput | CommandCreateOrConnectWithoutPluginInput[]
    upsert?: CommandUpsertWithWhereUniqueWithoutPluginInput | CommandUpsertWithWhereUniqueWithoutPluginInput[]
    createMany?: CommandCreateManyPluginInputEnvelope
    set?: CommandWhereUniqueInput | CommandWhereUniqueInput[]
    disconnect?: CommandWhereUniqueInput | CommandWhereUniqueInput[]
    delete?: CommandWhereUniqueInput | CommandWhereUniqueInput[]
    connect?: CommandWhereUniqueInput | CommandWhereUniqueInput[]
    update?: CommandUpdateWithWhereUniqueWithoutPluginInput | CommandUpdateWithWhereUniqueWithoutPluginInput[]
    updateMany?: CommandUpdateManyWithWhereWithoutPluginInput | CommandUpdateManyWithWhereWithoutPluginInput[]
    deleteMany?: CommandScalarWhereInput | CommandScalarWhereInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type AgentCreateWithoutAccountInput = {
    id?: string
    name: string
    description?: string | null
    tools?: string | null
    model?: string | null
    color?: string | null
    filePath: string
    content: string
    source?: string
    plugin?: PluginCreateNestedOneWithoutAgentsInput
  }

  export type AgentUncheckedCreateWithoutAccountInput = {
    id?: string
    name: string
    description?: string | null
    tools?: string | null
    model?: string | null
    color?: string | null
    filePath: string
    content: string
    source?: string
    pluginId?: string | null
  }

  export type AgentCreateOrConnectWithoutAccountInput = {
    where: AgentWhereUniqueInput
    create: XOR<AgentCreateWithoutAccountInput, AgentUncheckedCreateWithoutAccountInput>
  }

  export type AgentCreateManyAccountInputEnvelope = {
    data: AgentCreateManyAccountInput | AgentCreateManyAccountInput[]
    skipDuplicates?: boolean
  }

  export type SkillCreateWithoutAccountInput = {
    id?: string
    name: string
    description?: string | null
    author?: string | null
    version?: string | null
    dirPath: string
    content: string
    source?: string
    hasExamples?: boolean
    hasScripts?: boolean
    plugin?: PluginCreateNestedOneWithoutSkillsInput
  }

  export type SkillUncheckedCreateWithoutAccountInput = {
    id?: string
    name: string
    description?: string | null
    author?: string | null
    version?: string | null
    dirPath: string
    content: string
    source?: string
    hasExamples?: boolean
    hasScripts?: boolean
    pluginId?: string | null
  }

  export type SkillCreateOrConnectWithoutAccountInput = {
    where: SkillWhereUniqueInput
    create: XOR<SkillCreateWithoutAccountInput, SkillUncheckedCreateWithoutAccountInput>
  }

  export type SkillCreateManyAccountInputEnvelope = {
    data: SkillCreateManyAccountInput | SkillCreateManyAccountInput[]
    skipDuplicates?: boolean
  }

  export type CommandCreateWithoutAccountInput = {
    id?: string
    name: string
    description?: string | null
    filePath: string
    content: string
    source?: string
    project?: ProjectCreateNestedOneWithoutCommandsInput
    plugin?: PluginCreateNestedOneWithoutCommandsInput
  }

  export type CommandUncheckedCreateWithoutAccountInput = {
    id?: string
    name: string
    description?: string | null
    filePath: string
    content: string
    source?: string
    projectId?: string | null
    pluginId?: string | null
  }

  export type CommandCreateOrConnectWithoutAccountInput = {
    where: CommandWhereUniqueInput
    create: XOR<CommandCreateWithoutAccountInput, CommandUncheckedCreateWithoutAccountInput>
  }

  export type CommandCreateManyAccountInputEnvelope = {
    data: CommandCreateManyAccountInput | CommandCreateManyAccountInput[]
    skipDuplicates?: boolean
  }

  export type PluginCreateWithoutAccountInput = {
    id?: string
    name: string
    description?: string | null
    author?: string | null
    category?: string | null
    dirPath: string
    agents?: AgentCreateNestedManyWithoutPluginInput
    skills?: SkillCreateNestedManyWithoutPluginInput
    commands?: CommandCreateNestedManyWithoutPluginInput
  }

  export type PluginUncheckedCreateWithoutAccountInput = {
    id?: string
    name: string
    description?: string | null
    author?: string | null
    category?: string | null
    dirPath: string
    agents?: AgentUncheckedCreateNestedManyWithoutPluginInput
    skills?: SkillUncheckedCreateNestedManyWithoutPluginInput
    commands?: CommandUncheckedCreateNestedManyWithoutPluginInput
  }

  export type PluginCreateOrConnectWithoutAccountInput = {
    where: PluginWhereUniqueInput
    create: XOR<PluginCreateWithoutAccountInput, PluginUncheckedCreateWithoutAccountInput>
  }

  export type PluginCreateManyAccountInputEnvelope = {
    data: PluginCreateManyAccountInput | PluginCreateManyAccountInput[]
    skipDuplicates?: boolean
  }

  export type AgentUpsertWithWhereUniqueWithoutAccountInput = {
    where: AgentWhereUniqueInput
    update: XOR<AgentUpdateWithoutAccountInput, AgentUncheckedUpdateWithoutAccountInput>
    create: XOR<AgentCreateWithoutAccountInput, AgentUncheckedCreateWithoutAccountInput>
  }

  export type AgentUpdateWithWhereUniqueWithoutAccountInput = {
    where: AgentWhereUniqueInput
    data: XOR<AgentUpdateWithoutAccountInput, AgentUncheckedUpdateWithoutAccountInput>
  }

  export type AgentUpdateManyWithWhereWithoutAccountInput = {
    where: AgentScalarWhereInput
    data: XOR<AgentUpdateManyMutationInput, AgentUncheckedUpdateManyWithoutAccountInput>
  }

  export type AgentScalarWhereInput = {
    AND?: AgentScalarWhereInput | AgentScalarWhereInput[]
    OR?: AgentScalarWhereInput[]
    NOT?: AgentScalarWhereInput | AgentScalarWhereInput[]
    id?: StringFilter<"Agent"> | string
    name?: StringFilter<"Agent"> | string
    description?: StringNullableFilter<"Agent"> | string | null
    tools?: StringNullableFilter<"Agent"> | string | null
    model?: StringNullableFilter<"Agent"> | string | null
    color?: StringNullableFilter<"Agent"> | string | null
    filePath?: StringFilter<"Agent"> | string
    content?: StringFilter<"Agent"> | string
    source?: StringFilter<"Agent"> | string
    accountId?: StringFilter<"Agent"> | string
    pluginId?: StringNullableFilter<"Agent"> | string | null
  }

  export type SkillUpsertWithWhereUniqueWithoutAccountInput = {
    where: SkillWhereUniqueInput
    update: XOR<SkillUpdateWithoutAccountInput, SkillUncheckedUpdateWithoutAccountInput>
    create: XOR<SkillCreateWithoutAccountInput, SkillUncheckedCreateWithoutAccountInput>
  }

  export type SkillUpdateWithWhereUniqueWithoutAccountInput = {
    where: SkillWhereUniqueInput
    data: XOR<SkillUpdateWithoutAccountInput, SkillUncheckedUpdateWithoutAccountInput>
  }

  export type SkillUpdateManyWithWhereWithoutAccountInput = {
    where: SkillScalarWhereInput
    data: XOR<SkillUpdateManyMutationInput, SkillUncheckedUpdateManyWithoutAccountInput>
  }

  export type SkillScalarWhereInput = {
    AND?: SkillScalarWhereInput | SkillScalarWhereInput[]
    OR?: SkillScalarWhereInput[]
    NOT?: SkillScalarWhereInput | SkillScalarWhereInput[]
    id?: StringFilter<"Skill"> | string
    name?: StringFilter<"Skill"> | string
    description?: StringNullableFilter<"Skill"> | string | null
    author?: StringNullableFilter<"Skill"> | string | null
    version?: StringNullableFilter<"Skill"> | string | null
    dirPath?: StringFilter<"Skill"> | string
    content?: StringFilter<"Skill"> | string
    source?: StringFilter<"Skill"> | string
    hasExamples?: BoolFilter<"Skill"> | boolean
    hasScripts?: BoolFilter<"Skill"> | boolean
    accountId?: StringFilter<"Skill"> | string
    pluginId?: StringNullableFilter<"Skill"> | string | null
  }

  export type CommandUpsertWithWhereUniqueWithoutAccountInput = {
    where: CommandWhereUniqueInput
    update: XOR<CommandUpdateWithoutAccountInput, CommandUncheckedUpdateWithoutAccountInput>
    create: XOR<CommandCreateWithoutAccountInput, CommandUncheckedCreateWithoutAccountInput>
  }

  export type CommandUpdateWithWhereUniqueWithoutAccountInput = {
    where: CommandWhereUniqueInput
    data: XOR<CommandUpdateWithoutAccountInput, CommandUncheckedUpdateWithoutAccountInput>
  }

  export type CommandUpdateManyWithWhereWithoutAccountInput = {
    where: CommandScalarWhereInput
    data: XOR<CommandUpdateManyMutationInput, CommandUncheckedUpdateManyWithoutAccountInput>
  }

  export type CommandScalarWhereInput = {
    AND?: CommandScalarWhereInput | CommandScalarWhereInput[]
    OR?: CommandScalarWhereInput[]
    NOT?: CommandScalarWhereInput | CommandScalarWhereInput[]
    id?: StringFilter<"Command"> | string
    name?: StringFilter<"Command"> | string
    description?: StringNullableFilter<"Command"> | string | null
    filePath?: StringFilter<"Command"> | string
    content?: StringFilter<"Command"> | string
    source?: StringFilter<"Command"> | string
    accountId?: StringNullableFilter<"Command"> | string | null
    projectId?: StringNullableFilter<"Command"> | string | null
    pluginId?: StringNullableFilter<"Command"> | string | null
  }

  export type PluginUpsertWithWhereUniqueWithoutAccountInput = {
    where: PluginWhereUniqueInput
    update: XOR<PluginUpdateWithoutAccountInput, PluginUncheckedUpdateWithoutAccountInput>
    create: XOR<PluginCreateWithoutAccountInput, PluginUncheckedCreateWithoutAccountInput>
  }

  export type PluginUpdateWithWhereUniqueWithoutAccountInput = {
    where: PluginWhereUniqueInput
    data: XOR<PluginUpdateWithoutAccountInput, PluginUncheckedUpdateWithoutAccountInput>
  }

  export type PluginUpdateManyWithWhereWithoutAccountInput = {
    where: PluginScalarWhereInput
    data: XOR<PluginUpdateManyMutationInput, PluginUncheckedUpdateManyWithoutAccountInput>
  }

  export type PluginScalarWhereInput = {
    AND?: PluginScalarWhereInput | PluginScalarWhereInput[]
    OR?: PluginScalarWhereInput[]
    NOT?: PluginScalarWhereInput | PluginScalarWhereInput[]
    id?: StringFilter<"Plugin"> | string
    name?: StringFilter<"Plugin"> | string
    description?: StringNullableFilter<"Plugin"> | string | null
    author?: StringNullableFilter<"Plugin"> | string | null
    category?: StringNullableFilter<"Plugin"> | string | null
    dirPath?: StringFilter<"Plugin"> | string
    accountId?: StringFilter<"Plugin"> | string
  }

  export type CommandCreateWithoutProjectInput = {
    id?: string
    name: string
    description?: string | null
    filePath: string
    content: string
    source?: string
    account?: AccountCreateNestedOneWithoutCommandsInput
    plugin?: PluginCreateNestedOneWithoutCommandsInput
  }

  export type CommandUncheckedCreateWithoutProjectInput = {
    id?: string
    name: string
    description?: string | null
    filePath: string
    content: string
    source?: string
    accountId?: string | null
    pluginId?: string | null
  }

  export type CommandCreateOrConnectWithoutProjectInput = {
    where: CommandWhereUniqueInput
    create: XOR<CommandCreateWithoutProjectInput, CommandUncheckedCreateWithoutProjectInput>
  }

  export type CommandCreateManyProjectInputEnvelope = {
    data: CommandCreateManyProjectInput | CommandCreateManyProjectInput[]
    skipDuplicates?: boolean
  }

  export type CommandUpsertWithWhereUniqueWithoutProjectInput = {
    where: CommandWhereUniqueInput
    update: XOR<CommandUpdateWithoutProjectInput, CommandUncheckedUpdateWithoutProjectInput>
    create: XOR<CommandCreateWithoutProjectInput, CommandUncheckedCreateWithoutProjectInput>
  }

  export type CommandUpdateWithWhereUniqueWithoutProjectInput = {
    where: CommandWhereUniqueInput
    data: XOR<CommandUpdateWithoutProjectInput, CommandUncheckedUpdateWithoutProjectInput>
  }

  export type CommandUpdateManyWithWhereWithoutProjectInput = {
    where: CommandScalarWhereInput
    data: XOR<CommandUpdateManyMutationInput, CommandUncheckedUpdateManyWithoutProjectInput>
  }

  export type AccountCreateWithoutAgentsInput = {
    id?: string
    name: string
    dirPath: string
    skills?: SkillCreateNestedManyWithoutAccountInput
    commands?: CommandCreateNestedManyWithoutAccountInput
    plugins?: PluginCreateNestedManyWithoutAccountInput
  }

  export type AccountUncheckedCreateWithoutAgentsInput = {
    id?: string
    name: string
    dirPath: string
    skills?: SkillUncheckedCreateNestedManyWithoutAccountInput
    commands?: CommandUncheckedCreateNestedManyWithoutAccountInput
    plugins?: PluginUncheckedCreateNestedManyWithoutAccountInput
  }

  export type AccountCreateOrConnectWithoutAgentsInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutAgentsInput, AccountUncheckedCreateWithoutAgentsInput>
  }

  export type PluginCreateWithoutAgentsInput = {
    id?: string
    name: string
    description?: string | null
    author?: string | null
    category?: string | null
    dirPath: string
    account: AccountCreateNestedOneWithoutPluginsInput
    skills?: SkillCreateNestedManyWithoutPluginInput
    commands?: CommandCreateNestedManyWithoutPluginInput
  }

  export type PluginUncheckedCreateWithoutAgentsInput = {
    id?: string
    name: string
    description?: string | null
    author?: string | null
    category?: string | null
    dirPath: string
    accountId: string
    skills?: SkillUncheckedCreateNestedManyWithoutPluginInput
    commands?: CommandUncheckedCreateNestedManyWithoutPluginInput
  }

  export type PluginCreateOrConnectWithoutAgentsInput = {
    where: PluginWhereUniqueInput
    create: XOR<PluginCreateWithoutAgentsInput, PluginUncheckedCreateWithoutAgentsInput>
  }

  export type AccountUpsertWithoutAgentsInput = {
    update: XOR<AccountUpdateWithoutAgentsInput, AccountUncheckedUpdateWithoutAgentsInput>
    create: XOR<AccountCreateWithoutAgentsInput, AccountUncheckedCreateWithoutAgentsInput>
    where?: AccountWhereInput
  }

  export type AccountUpdateToOneWithWhereWithoutAgentsInput = {
    where?: AccountWhereInput
    data: XOR<AccountUpdateWithoutAgentsInput, AccountUncheckedUpdateWithoutAgentsInput>
  }

  export type AccountUpdateWithoutAgentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    dirPath?: StringFieldUpdateOperationsInput | string
    skills?: SkillUpdateManyWithoutAccountNestedInput
    commands?: CommandUpdateManyWithoutAccountNestedInput
    plugins?: PluginUpdateManyWithoutAccountNestedInput
  }

  export type AccountUncheckedUpdateWithoutAgentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    dirPath?: StringFieldUpdateOperationsInput | string
    skills?: SkillUncheckedUpdateManyWithoutAccountNestedInput
    commands?: CommandUncheckedUpdateManyWithoutAccountNestedInput
    plugins?: PluginUncheckedUpdateManyWithoutAccountNestedInput
  }

  export type PluginUpsertWithoutAgentsInput = {
    update: XOR<PluginUpdateWithoutAgentsInput, PluginUncheckedUpdateWithoutAgentsInput>
    create: XOR<PluginCreateWithoutAgentsInput, PluginUncheckedCreateWithoutAgentsInput>
    where?: PluginWhereInput
  }

  export type PluginUpdateToOneWithWhereWithoutAgentsInput = {
    where?: PluginWhereInput
    data: XOR<PluginUpdateWithoutAgentsInput, PluginUncheckedUpdateWithoutAgentsInput>
  }

  export type PluginUpdateWithoutAgentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    author?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    dirPath?: StringFieldUpdateOperationsInput | string
    account?: AccountUpdateOneRequiredWithoutPluginsNestedInput
    skills?: SkillUpdateManyWithoutPluginNestedInput
    commands?: CommandUpdateManyWithoutPluginNestedInput
  }

  export type PluginUncheckedUpdateWithoutAgentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    author?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    dirPath?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    skills?: SkillUncheckedUpdateManyWithoutPluginNestedInput
    commands?: CommandUncheckedUpdateManyWithoutPluginNestedInput
  }

  export type AccountCreateWithoutSkillsInput = {
    id?: string
    name: string
    dirPath: string
    agents?: AgentCreateNestedManyWithoutAccountInput
    commands?: CommandCreateNestedManyWithoutAccountInput
    plugins?: PluginCreateNestedManyWithoutAccountInput
  }

  export type AccountUncheckedCreateWithoutSkillsInput = {
    id?: string
    name: string
    dirPath: string
    agents?: AgentUncheckedCreateNestedManyWithoutAccountInput
    commands?: CommandUncheckedCreateNestedManyWithoutAccountInput
    plugins?: PluginUncheckedCreateNestedManyWithoutAccountInput
  }

  export type AccountCreateOrConnectWithoutSkillsInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutSkillsInput, AccountUncheckedCreateWithoutSkillsInput>
  }

  export type PluginCreateWithoutSkillsInput = {
    id?: string
    name: string
    description?: string | null
    author?: string | null
    category?: string | null
    dirPath: string
    account: AccountCreateNestedOneWithoutPluginsInput
    agents?: AgentCreateNestedManyWithoutPluginInput
    commands?: CommandCreateNestedManyWithoutPluginInput
  }

  export type PluginUncheckedCreateWithoutSkillsInput = {
    id?: string
    name: string
    description?: string | null
    author?: string | null
    category?: string | null
    dirPath: string
    accountId: string
    agents?: AgentUncheckedCreateNestedManyWithoutPluginInput
    commands?: CommandUncheckedCreateNestedManyWithoutPluginInput
  }

  export type PluginCreateOrConnectWithoutSkillsInput = {
    where: PluginWhereUniqueInput
    create: XOR<PluginCreateWithoutSkillsInput, PluginUncheckedCreateWithoutSkillsInput>
  }

  export type AccountUpsertWithoutSkillsInput = {
    update: XOR<AccountUpdateWithoutSkillsInput, AccountUncheckedUpdateWithoutSkillsInput>
    create: XOR<AccountCreateWithoutSkillsInput, AccountUncheckedCreateWithoutSkillsInput>
    where?: AccountWhereInput
  }

  export type AccountUpdateToOneWithWhereWithoutSkillsInput = {
    where?: AccountWhereInput
    data: XOR<AccountUpdateWithoutSkillsInput, AccountUncheckedUpdateWithoutSkillsInput>
  }

  export type AccountUpdateWithoutSkillsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    dirPath?: StringFieldUpdateOperationsInput | string
    agents?: AgentUpdateManyWithoutAccountNestedInput
    commands?: CommandUpdateManyWithoutAccountNestedInput
    plugins?: PluginUpdateManyWithoutAccountNestedInput
  }

  export type AccountUncheckedUpdateWithoutSkillsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    dirPath?: StringFieldUpdateOperationsInput | string
    agents?: AgentUncheckedUpdateManyWithoutAccountNestedInput
    commands?: CommandUncheckedUpdateManyWithoutAccountNestedInput
    plugins?: PluginUncheckedUpdateManyWithoutAccountNestedInput
  }

  export type PluginUpsertWithoutSkillsInput = {
    update: XOR<PluginUpdateWithoutSkillsInput, PluginUncheckedUpdateWithoutSkillsInput>
    create: XOR<PluginCreateWithoutSkillsInput, PluginUncheckedCreateWithoutSkillsInput>
    where?: PluginWhereInput
  }

  export type PluginUpdateToOneWithWhereWithoutSkillsInput = {
    where?: PluginWhereInput
    data: XOR<PluginUpdateWithoutSkillsInput, PluginUncheckedUpdateWithoutSkillsInput>
  }

  export type PluginUpdateWithoutSkillsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    author?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    dirPath?: StringFieldUpdateOperationsInput | string
    account?: AccountUpdateOneRequiredWithoutPluginsNestedInput
    agents?: AgentUpdateManyWithoutPluginNestedInput
    commands?: CommandUpdateManyWithoutPluginNestedInput
  }

  export type PluginUncheckedUpdateWithoutSkillsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    author?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    dirPath?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    agents?: AgentUncheckedUpdateManyWithoutPluginNestedInput
    commands?: CommandUncheckedUpdateManyWithoutPluginNestedInput
  }

  export type AccountCreateWithoutCommandsInput = {
    id?: string
    name: string
    dirPath: string
    agents?: AgentCreateNestedManyWithoutAccountInput
    skills?: SkillCreateNestedManyWithoutAccountInput
    plugins?: PluginCreateNestedManyWithoutAccountInput
  }

  export type AccountUncheckedCreateWithoutCommandsInput = {
    id?: string
    name: string
    dirPath: string
    agents?: AgentUncheckedCreateNestedManyWithoutAccountInput
    skills?: SkillUncheckedCreateNestedManyWithoutAccountInput
    plugins?: PluginUncheckedCreateNestedManyWithoutAccountInput
  }

  export type AccountCreateOrConnectWithoutCommandsInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutCommandsInput, AccountUncheckedCreateWithoutCommandsInput>
  }

  export type ProjectCreateWithoutCommandsInput = {
    id?: string
    name: string
    dirPath: string
  }

  export type ProjectUncheckedCreateWithoutCommandsInput = {
    id?: string
    name: string
    dirPath: string
  }

  export type ProjectCreateOrConnectWithoutCommandsInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutCommandsInput, ProjectUncheckedCreateWithoutCommandsInput>
  }

  export type PluginCreateWithoutCommandsInput = {
    id?: string
    name: string
    description?: string | null
    author?: string | null
    category?: string | null
    dirPath: string
    account: AccountCreateNestedOneWithoutPluginsInput
    agents?: AgentCreateNestedManyWithoutPluginInput
    skills?: SkillCreateNestedManyWithoutPluginInput
  }

  export type PluginUncheckedCreateWithoutCommandsInput = {
    id?: string
    name: string
    description?: string | null
    author?: string | null
    category?: string | null
    dirPath: string
    accountId: string
    agents?: AgentUncheckedCreateNestedManyWithoutPluginInput
    skills?: SkillUncheckedCreateNestedManyWithoutPluginInput
  }

  export type PluginCreateOrConnectWithoutCommandsInput = {
    where: PluginWhereUniqueInput
    create: XOR<PluginCreateWithoutCommandsInput, PluginUncheckedCreateWithoutCommandsInput>
  }

  export type AccountUpsertWithoutCommandsInput = {
    update: XOR<AccountUpdateWithoutCommandsInput, AccountUncheckedUpdateWithoutCommandsInput>
    create: XOR<AccountCreateWithoutCommandsInput, AccountUncheckedCreateWithoutCommandsInput>
    where?: AccountWhereInput
  }

  export type AccountUpdateToOneWithWhereWithoutCommandsInput = {
    where?: AccountWhereInput
    data: XOR<AccountUpdateWithoutCommandsInput, AccountUncheckedUpdateWithoutCommandsInput>
  }

  export type AccountUpdateWithoutCommandsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    dirPath?: StringFieldUpdateOperationsInput | string
    agents?: AgentUpdateManyWithoutAccountNestedInput
    skills?: SkillUpdateManyWithoutAccountNestedInput
    plugins?: PluginUpdateManyWithoutAccountNestedInput
  }

  export type AccountUncheckedUpdateWithoutCommandsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    dirPath?: StringFieldUpdateOperationsInput | string
    agents?: AgentUncheckedUpdateManyWithoutAccountNestedInput
    skills?: SkillUncheckedUpdateManyWithoutAccountNestedInput
    plugins?: PluginUncheckedUpdateManyWithoutAccountNestedInput
  }

  export type ProjectUpsertWithoutCommandsInput = {
    update: XOR<ProjectUpdateWithoutCommandsInput, ProjectUncheckedUpdateWithoutCommandsInput>
    create: XOR<ProjectCreateWithoutCommandsInput, ProjectUncheckedCreateWithoutCommandsInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutCommandsInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutCommandsInput, ProjectUncheckedUpdateWithoutCommandsInput>
  }

  export type ProjectUpdateWithoutCommandsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    dirPath?: StringFieldUpdateOperationsInput | string
  }

  export type ProjectUncheckedUpdateWithoutCommandsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    dirPath?: StringFieldUpdateOperationsInput | string
  }

  export type PluginUpsertWithoutCommandsInput = {
    update: XOR<PluginUpdateWithoutCommandsInput, PluginUncheckedUpdateWithoutCommandsInput>
    create: XOR<PluginCreateWithoutCommandsInput, PluginUncheckedCreateWithoutCommandsInput>
    where?: PluginWhereInput
  }

  export type PluginUpdateToOneWithWhereWithoutCommandsInput = {
    where?: PluginWhereInput
    data: XOR<PluginUpdateWithoutCommandsInput, PluginUncheckedUpdateWithoutCommandsInput>
  }

  export type PluginUpdateWithoutCommandsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    author?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    dirPath?: StringFieldUpdateOperationsInput | string
    account?: AccountUpdateOneRequiredWithoutPluginsNestedInput
    agents?: AgentUpdateManyWithoutPluginNestedInput
    skills?: SkillUpdateManyWithoutPluginNestedInput
  }

  export type PluginUncheckedUpdateWithoutCommandsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    author?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    dirPath?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    agents?: AgentUncheckedUpdateManyWithoutPluginNestedInput
    skills?: SkillUncheckedUpdateManyWithoutPluginNestedInput
  }

  export type AccountCreateWithoutPluginsInput = {
    id?: string
    name: string
    dirPath: string
    agents?: AgentCreateNestedManyWithoutAccountInput
    skills?: SkillCreateNestedManyWithoutAccountInput
    commands?: CommandCreateNestedManyWithoutAccountInput
  }

  export type AccountUncheckedCreateWithoutPluginsInput = {
    id?: string
    name: string
    dirPath: string
    agents?: AgentUncheckedCreateNestedManyWithoutAccountInput
    skills?: SkillUncheckedCreateNestedManyWithoutAccountInput
    commands?: CommandUncheckedCreateNestedManyWithoutAccountInput
  }

  export type AccountCreateOrConnectWithoutPluginsInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutPluginsInput, AccountUncheckedCreateWithoutPluginsInput>
  }

  export type AgentCreateWithoutPluginInput = {
    id?: string
    name: string
    description?: string | null
    tools?: string | null
    model?: string | null
    color?: string | null
    filePath: string
    content: string
    source?: string
    account: AccountCreateNestedOneWithoutAgentsInput
  }

  export type AgentUncheckedCreateWithoutPluginInput = {
    id?: string
    name: string
    description?: string | null
    tools?: string | null
    model?: string | null
    color?: string | null
    filePath: string
    content: string
    source?: string
    accountId: string
  }

  export type AgentCreateOrConnectWithoutPluginInput = {
    where: AgentWhereUniqueInput
    create: XOR<AgentCreateWithoutPluginInput, AgentUncheckedCreateWithoutPluginInput>
  }

  export type AgentCreateManyPluginInputEnvelope = {
    data: AgentCreateManyPluginInput | AgentCreateManyPluginInput[]
    skipDuplicates?: boolean
  }

  export type SkillCreateWithoutPluginInput = {
    id?: string
    name: string
    description?: string | null
    author?: string | null
    version?: string | null
    dirPath: string
    content: string
    source?: string
    hasExamples?: boolean
    hasScripts?: boolean
    account: AccountCreateNestedOneWithoutSkillsInput
  }

  export type SkillUncheckedCreateWithoutPluginInput = {
    id?: string
    name: string
    description?: string | null
    author?: string | null
    version?: string | null
    dirPath: string
    content: string
    source?: string
    hasExamples?: boolean
    hasScripts?: boolean
    accountId: string
  }

  export type SkillCreateOrConnectWithoutPluginInput = {
    where: SkillWhereUniqueInput
    create: XOR<SkillCreateWithoutPluginInput, SkillUncheckedCreateWithoutPluginInput>
  }

  export type SkillCreateManyPluginInputEnvelope = {
    data: SkillCreateManyPluginInput | SkillCreateManyPluginInput[]
    skipDuplicates?: boolean
  }

  export type CommandCreateWithoutPluginInput = {
    id?: string
    name: string
    description?: string | null
    filePath: string
    content: string
    source?: string
    account?: AccountCreateNestedOneWithoutCommandsInput
    project?: ProjectCreateNestedOneWithoutCommandsInput
  }

  export type CommandUncheckedCreateWithoutPluginInput = {
    id?: string
    name: string
    description?: string | null
    filePath: string
    content: string
    source?: string
    accountId?: string | null
    projectId?: string | null
  }

  export type CommandCreateOrConnectWithoutPluginInput = {
    where: CommandWhereUniqueInput
    create: XOR<CommandCreateWithoutPluginInput, CommandUncheckedCreateWithoutPluginInput>
  }

  export type CommandCreateManyPluginInputEnvelope = {
    data: CommandCreateManyPluginInput | CommandCreateManyPluginInput[]
    skipDuplicates?: boolean
  }

  export type AccountUpsertWithoutPluginsInput = {
    update: XOR<AccountUpdateWithoutPluginsInput, AccountUncheckedUpdateWithoutPluginsInput>
    create: XOR<AccountCreateWithoutPluginsInput, AccountUncheckedCreateWithoutPluginsInput>
    where?: AccountWhereInput
  }

  export type AccountUpdateToOneWithWhereWithoutPluginsInput = {
    where?: AccountWhereInput
    data: XOR<AccountUpdateWithoutPluginsInput, AccountUncheckedUpdateWithoutPluginsInput>
  }

  export type AccountUpdateWithoutPluginsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    dirPath?: StringFieldUpdateOperationsInput | string
    agents?: AgentUpdateManyWithoutAccountNestedInput
    skills?: SkillUpdateManyWithoutAccountNestedInput
    commands?: CommandUpdateManyWithoutAccountNestedInput
  }

  export type AccountUncheckedUpdateWithoutPluginsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    dirPath?: StringFieldUpdateOperationsInput | string
    agents?: AgentUncheckedUpdateManyWithoutAccountNestedInput
    skills?: SkillUncheckedUpdateManyWithoutAccountNestedInput
    commands?: CommandUncheckedUpdateManyWithoutAccountNestedInput
  }

  export type AgentUpsertWithWhereUniqueWithoutPluginInput = {
    where: AgentWhereUniqueInput
    update: XOR<AgentUpdateWithoutPluginInput, AgentUncheckedUpdateWithoutPluginInput>
    create: XOR<AgentCreateWithoutPluginInput, AgentUncheckedCreateWithoutPluginInput>
  }

  export type AgentUpdateWithWhereUniqueWithoutPluginInput = {
    where: AgentWhereUniqueInput
    data: XOR<AgentUpdateWithoutPluginInput, AgentUncheckedUpdateWithoutPluginInput>
  }

  export type AgentUpdateManyWithWhereWithoutPluginInput = {
    where: AgentScalarWhereInput
    data: XOR<AgentUpdateManyMutationInput, AgentUncheckedUpdateManyWithoutPluginInput>
  }

  export type SkillUpsertWithWhereUniqueWithoutPluginInput = {
    where: SkillWhereUniqueInput
    update: XOR<SkillUpdateWithoutPluginInput, SkillUncheckedUpdateWithoutPluginInput>
    create: XOR<SkillCreateWithoutPluginInput, SkillUncheckedCreateWithoutPluginInput>
  }

  export type SkillUpdateWithWhereUniqueWithoutPluginInput = {
    where: SkillWhereUniqueInput
    data: XOR<SkillUpdateWithoutPluginInput, SkillUncheckedUpdateWithoutPluginInput>
  }

  export type SkillUpdateManyWithWhereWithoutPluginInput = {
    where: SkillScalarWhereInput
    data: XOR<SkillUpdateManyMutationInput, SkillUncheckedUpdateManyWithoutPluginInput>
  }

  export type CommandUpsertWithWhereUniqueWithoutPluginInput = {
    where: CommandWhereUniqueInput
    update: XOR<CommandUpdateWithoutPluginInput, CommandUncheckedUpdateWithoutPluginInput>
    create: XOR<CommandCreateWithoutPluginInput, CommandUncheckedCreateWithoutPluginInput>
  }

  export type CommandUpdateWithWhereUniqueWithoutPluginInput = {
    where: CommandWhereUniqueInput
    data: XOR<CommandUpdateWithoutPluginInput, CommandUncheckedUpdateWithoutPluginInput>
  }

  export type CommandUpdateManyWithWhereWithoutPluginInput = {
    where: CommandScalarWhereInput
    data: XOR<CommandUpdateManyMutationInput, CommandUncheckedUpdateManyWithoutPluginInput>
  }

  export type AgentCreateManyAccountInput = {
    id?: string
    name: string
    description?: string | null
    tools?: string | null
    model?: string | null
    color?: string | null
    filePath: string
    content: string
    source?: string
    pluginId?: string | null
  }

  export type SkillCreateManyAccountInput = {
    id?: string
    name: string
    description?: string | null
    author?: string | null
    version?: string | null
    dirPath: string
    content: string
    source?: string
    hasExamples?: boolean
    hasScripts?: boolean
    pluginId?: string | null
  }

  export type CommandCreateManyAccountInput = {
    id?: string
    name: string
    description?: string | null
    filePath: string
    content: string
    source?: string
    projectId?: string | null
    pluginId?: string | null
  }

  export type PluginCreateManyAccountInput = {
    id?: string
    name: string
    description?: string | null
    author?: string | null
    category?: string | null
    dirPath: string
  }

  export type AgentUpdateWithoutAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    tools?: NullableStringFieldUpdateOperationsInput | string | null
    model?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    filePath?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    plugin?: PluginUpdateOneWithoutAgentsNestedInput
  }

  export type AgentUncheckedUpdateWithoutAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    tools?: NullableStringFieldUpdateOperationsInput | string | null
    model?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    filePath?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    pluginId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AgentUncheckedUpdateManyWithoutAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    tools?: NullableStringFieldUpdateOperationsInput | string | null
    model?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    filePath?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    pluginId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SkillUpdateWithoutAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    author?: NullableStringFieldUpdateOperationsInput | string | null
    version?: NullableStringFieldUpdateOperationsInput | string | null
    dirPath?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    hasExamples?: BoolFieldUpdateOperationsInput | boolean
    hasScripts?: BoolFieldUpdateOperationsInput | boolean
    plugin?: PluginUpdateOneWithoutSkillsNestedInput
  }

  export type SkillUncheckedUpdateWithoutAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    author?: NullableStringFieldUpdateOperationsInput | string | null
    version?: NullableStringFieldUpdateOperationsInput | string | null
    dirPath?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    hasExamples?: BoolFieldUpdateOperationsInput | boolean
    hasScripts?: BoolFieldUpdateOperationsInput | boolean
    pluginId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SkillUncheckedUpdateManyWithoutAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    author?: NullableStringFieldUpdateOperationsInput | string | null
    version?: NullableStringFieldUpdateOperationsInput | string | null
    dirPath?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    hasExamples?: BoolFieldUpdateOperationsInput | boolean
    hasScripts?: BoolFieldUpdateOperationsInput | boolean
    pluginId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CommandUpdateWithoutAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    filePath?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    project?: ProjectUpdateOneWithoutCommandsNestedInput
    plugin?: PluginUpdateOneWithoutCommandsNestedInput
  }

  export type CommandUncheckedUpdateWithoutAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    filePath?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    projectId?: NullableStringFieldUpdateOperationsInput | string | null
    pluginId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CommandUncheckedUpdateManyWithoutAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    filePath?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    projectId?: NullableStringFieldUpdateOperationsInput | string | null
    pluginId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PluginUpdateWithoutAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    author?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    dirPath?: StringFieldUpdateOperationsInput | string
    agents?: AgentUpdateManyWithoutPluginNestedInput
    skills?: SkillUpdateManyWithoutPluginNestedInput
    commands?: CommandUpdateManyWithoutPluginNestedInput
  }

  export type PluginUncheckedUpdateWithoutAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    author?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    dirPath?: StringFieldUpdateOperationsInput | string
    agents?: AgentUncheckedUpdateManyWithoutPluginNestedInput
    skills?: SkillUncheckedUpdateManyWithoutPluginNestedInput
    commands?: CommandUncheckedUpdateManyWithoutPluginNestedInput
  }

  export type PluginUncheckedUpdateManyWithoutAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    author?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    dirPath?: StringFieldUpdateOperationsInput | string
  }

  export type CommandCreateManyProjectInput = {
    id?: string
    name: string
    description?: string | null
    filePath: string
    content: string
    source?: string
    accountId?: string | null
    pluginId?: string | null
  }

  export type CommandUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    filePath?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    account?: AccountUpdateOneWithoutCommandsNestedInput
    plugin?: PluginUpdateOneWithoutCommandsNestedInput
  }

  export type CommandUncheckedUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    filePath?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    accountId?: NullableStringFieldUpdateOperationsInput | string | null
    pluginId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CommandUncheckedUpdateManyWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    filePath?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    accountId?: NullableStringFieldUpdateOperationsInput | string | null
    pluginId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AgentCreateManyPluginInput = {
    id?: string
    name: string
    description?: string | null
    tools?: string | null
    model?: string | null
    color?: string | null
    filePath: string
    content: string
    source?: string
    accountId: string
  }

  export type SkillCreateManyPluginInput = {
    id?: string
    name: string
    description?: string | null
    author?: string | null
    version?: string | null
    dirPath: string
    content: string
    source?: string
    hasExamples?: boolean
    hasScripts?: boolean
    accountId: string
  }

  export type CommandCreateManyPluginInput = {
    id?: string
    name: string
    description?: string | null
    filePath: string
    content: string
    source?: string
    accountId?: string | null
    projectId?: string | null
  }

  export type AgentUpdateWithoutPluginInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    tools?: NullableStringFieldUpdateOperationsInput | string | null
    model?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    filePath?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    account?: AccountUpdateOneRequiredWithoutAgentsNestedInput
  }

  export type AgentUncheckedUpdateWithoutPluginInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    tools?: NullableStringFieldUpdateOperationsInput | string | null
    model?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    filePath?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
  }

  export type AgentUncheckedUpdateManyWithoutPluginInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    tools?: NullableStringFieldUpdateOperationsInput | string | null
    model?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    filePath?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
  }

  export type SkillUpdateWithoutPluginInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    author?: NullableStringFieldUpdateOperationsInput | string | null
    version?: NullableStringFieldUpdateOperationsInput | string | null
    dirPath?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    hasExamples?: BoolFieldUpdateOperationsInput | boolean
    hasScripts?: BoolFieldUpdateOperationsInput | boolean
    account?: AccountUpdateOneRequiredWithoutSkillsNestedInput
  }

  export type SkillUncheckedUpdateWithoutPluginInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    author?: NullableStringFieldUpdateOperationsInput | string | null
    version?: NullableStringFieldUpdateOperationsInput | string | null
    dirPath?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    hasExamples?: BoolFieldUpdateOperationsInput | boolean
    hasScripts?: BoolFieldUpdateOperationsInput | boolean
    accountId?: StringFieldUpdateOperationsInput | string
  }

  export type SkillUncheckedUpdateManyWithoutPluginInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    author?: NullableStringFieldUpdateOperationsInput | string | null
    version?: NullableStringFieldUpdateOperationsInput | string | null
    dirPath?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    hasExamples?: BoolFieldUpdateOperationsInput | boolean
    hasScripts?: BoolFieldUpdateOperationsInput | boolean
    accountId?: StringFieldUpdateOperationsInput | string
  }

  export type CommandUpdateWithoutPluginInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    filePath?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    account?: AccountUpdateOneWithoutCommandsNestedInput
    project?: ProjectUpdateOneWithoutCommandsNestedInput
  }

  export type CommandUncheckedUpdateWithoutPluginInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    filePath?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    accountId?: NullableStringFieldUpdateOperationsInput | string | null
    projectId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CommandUncheckedUpdateManyWithoutPluginInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    filePath?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    accountId?: NullableStringFieldUpdateOperationsInput | string | null
    projectId?: NullableStringFieldUpdateOperationsInput | string | null
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