
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
 * Model candidatures
 * This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
 */
export type candidatures = $Result.DefaultSelection<Prisma.$candidaturesPayload>
/**
 * Model freelance_cvs
 * 
 */
export type freelance_cvs = $Result.DefaultSelection<Prisma.$freelance_cvsPayload>
/**
 * Model missions
 * This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
 */
export type missions = $Result.DefaultSelection<Prisma.$missionsPayload>
/**
 * Model users
 * This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
 */
export type users = $Result.DefaultSelection<Prisma.$usersPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Candidatures
 * const candidatures = await prisma.candidatures.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Candidatures
   * const candidatures = await prisma.candidatures.findMany()
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
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.candidatures`: Exposes CRUD operations for the **candidatures** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Candidatures
    * const candidatures = await prisma.candidatures.findMany()
    * ```
    */
  get candidatures(): Prisma.candidaturesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.freelance_cvs`: Exposes CRUD operations for the **freelance_cvs** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Freelance_cvs
    * const freelance_cvs = await prisma.freelance_cvs.findMany()
    * ```
    */
  get freelance_cvs(): Prisma.freelance_cvsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.missions`: Exposes CRUD operations for the **missions** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Missions
    * const missions = await prisma.missions.findMany()
    * ```
    */
  get missions(): Prisma.missionsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.users`: Exposes CRUD operations for the **users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.usersDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.9.0
   * Query Engine version: 81e4af48011447c3cc503a190e86995b66d2a28e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


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
    candidatures: 'candidatures',
    freelance_cvs: 'freelance_cvs',
    missions: 'missions',
    users: 'users'
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
      modelProps: "candidatures" | "freelance_cvs" | "missions" | "users"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      candidatures: {
        payload: Prisma.$candidaturesPayload<ExtArgs>
        fields: Prisma.candidaturesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.candidaturesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$candidaturesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.candidaturesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$candidaturesPayload>
          }
          findFirst: {
            args: Prisma.candidaturesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$candidaturesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.candidaturesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$candidaturesPayload>
          }
          findMany: {
            args: Prisma.candidaturesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$candidaturesPayload>[]
          }
          create: {
            args: Prisma.candidaturesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$candidaturesPayload>
          }
          createMany: {
            args: Prisma.candidaturesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.candidaturesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$candidaturesPayload>[]
          }
          delete: {
            args: Prisma.candidaturesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$candidaturesPayload>
          }
          update: {
            args: Prisma.candidaturesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$candidaturesPayload>
          }
          deleteMany: {
            args: Prisma.candidaturesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.candidaturesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.candidaturesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$candidaturesPayload>[]
          }
          upsert: {
            args: Prisma.candidaturesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$candidaturesPayload>
          }
          aggregate: {
            args: Prisma.CandidaturesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCandidatures>
          }
          groupBy: {
            args: Prisma.candidaturesGroupByArgs<ExtArgs>
            result: $Utils.Optional<CandidaturesGroupByOutputType>[]
          }
          count: {
            args: Prisma.candidaturesCountArgs<ExtArgs>
            result: $Utils.Optional<CandidaturesCountAggregateOutputType> | number
          }
        }
      }
      freelance_cvs: {
        payload: Prisma.$freelance_cvsPayload<ExtArgs>
        fields: Prisma.freelance_cvsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.freelance_cvsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$freelance_cvsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.freelance_cvsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$freelance_cvsPayload>
          }
          findFirst: {
            args: Prisma.freelance_cvsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$freelance_cvsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.freelance_cvsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$freelance_cvsPayload>
          }
          findMany: {
            args: Prisma.freelance_cvsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$freelance_cvsPayload>[]
          }
          create: {
            args: Prisma.freelance_cvsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$freelance_cvsPayload>
          }
          createMany: {
            args: Prisma.freelance_cvsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.freelance_cvsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$freelance_cvsPayload>[]
          }
          delete: {
            args: Prisma.freelance_cvsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$freelance_cvsPayload>
          }
          update: {
            args: Prisma.freelance_cvsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$freelance_cvsPayload>
          }
          deleteMany: {
            args: Prisma.freelance_cvsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.freelance_cvsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.freelance_cvsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$freelance_cvsPayload>[]
          }
          upsert: {
            args: Prisma.freelance_cvsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$freelance_cvsPayload>
          }
          aggregate: {
            args: Prisma.Freelance_cvsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFreelance_cvs>
          }
          groupBy: {
            args: Prisma.freelance_cvsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Freelance_cvsGroupByOutputType>[]
          }
          count: {
            args: Prisma.freelance_cvsCountArgs<ExtArgs>
            result: $Utils.Optional<Freelance_cvsCountAggregateOutputType> | number
          }
        }
      }
      missions: {
        payload: Prisma.$missionsPayload<ExtArgs>
        fields: Prisma.missionsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.missionsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$missionsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.missionsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$missionsPayload>
          }
          findFirst: {
            args: Prisma.missionsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$missionsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.missionsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$missionsPayload>
          }
          findMany: {
            args: Prisma.missionsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$missionsPayload>[]
          }
          create: {
            args: Prisma.missionsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$missionsPayload>
          }
          createMany: {
            args: Prisma.missionsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.missionsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$missionsPayload>[]
          }
          delete: {
            args: Prisma.missionsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$missionsPayload>
          }
          update: {
            args: Prisma.missionsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$missionsPayload>
          }
          deleteMany: {
            args: Prisma.missionsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.missionsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.missionsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$missionsPayload>[]
          }
          upsert: {
            args: Prisma.missionsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$missionsPayload>
          }
          aggregate: {
            args: Prisma.MissionsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMissions>
          }
          groupBy: {
            args: Prisma.missionsGroupByArgs<ExtArgs>
            result: $Utils.Optional<MissionsGroupByOutputType>[]
          }
          count: {
            args: Prisma.missionsCountArgs<ExtArgs>
            result: $Utils.Optional<MissionsCountAggregateOutputType> | number
          }
        }
      }
      users: {
        payload: Prisma.$usersPayload<ExtArgs>
        fields: Prisma.usersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findFirst: {
            args: Prisma.usersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findMany: {
            args: Prisma.usersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          create: {
            args: Prisma.usersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          createMany: {
            args: Prisma.usersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.usersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          delete: {
            args: Prisma.usersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          update: {
            args: Prisma.usersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          deleteMany: {
            args: Prisma.usersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.usersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          upsert: {
            args: Prisma.usersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.usersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.usersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
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
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
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
    candidatures?: candidaturesOmit
    freelance_cvs?: freelance_cvsOmit
    missions?: missionsOmit
    users?: usersOmit
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
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Count Type MissionsCountOutputType
   */

  export type MissionsCountOutputType = {
    candidatures: number
  }

  export type MissionsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    candidatures?: boolean | MissionsCountOutputTypeCountCandidaturesArgs
  }

  // Custom InputTypes
  /**
   * MissionsCountOutputType without action
   */
  export type MissionsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MissionsCountOutputType
     */
    select?: MissionsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MissionsCountOutputType without action
   */
  export type MissionsCountOutputTypeCountCandidaturesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: candidaturesWhereInput
  }


  /**
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    candidatures: number
    freelance_cvs: number
    missions: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    candidatures?: boolean | UsersCountOutputTypeCountCandidaturesArgs
    freelance_cvs?: boolean | UsersCountOutputTypeCountFreelance_cvsArgs
    missions?: boolean | UsersCountOutputTypeCountMissionsArgs
  }

  // Custom InputTypes
  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountCandidaturesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: candidaturesWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountFreelance_cvsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: freelance_cvsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountMissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: missionsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model candidatures
   */

  export type AggregateCandidatures = {
    _count: CandidaturesCountAggregateOutputType | null
    _min: CandidaturesMinAggregateOutputType | null
    _max: CandidaturesMaxAggregateOutputType | null
  }

  export type CandidaturesMinAggregateOutputType = {
    id: string | null
    mission_id: string | null
    user_id: string | null
    lettre_motivation: string | null
    status: string | null
    created_at: Date | null
  }

  export type CandidaturesMaxAggregateOutputType = {
    id: string | null
    mission_id: string | null
    user_id: string | null
    lettre_motivation: string | null
    status: string | null
    created_at: Date | null
  }

  export type CandidaturesCountAggregateOutputType = {
    id: number
    mission_id: number
    user_id: number
    lettre_motivation: number
    status: number
    created_at: number
    _all: number
  }


  export type CandidaturesMinAggregateInputType = {
    id?: true
    mission_id?: true
    user_id?: true
    lettre_motivation?: true
    status?: true
    created_at?: true
  }

  export type CandidaturesMaxAggregateInputType = {
    id?: true
    mission_id?: true
    user_id?: true
    lettre_motivation?: true
    status?: true
    created_at?: true
  }

  export type CandidaturesCountAggregateInputType = {
    id?: true
    mission_id?: true
    user_id?: true
    lettre_motivation?: true
    status?: true
    created_at?: true
    _all?: true
  }

  export type CandidaturesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which candidatures to aggregate.
     */
    where?: candidaturesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of candidatures to fetch.
     */
    orderBy?: candidaturesOrderByWithRelationInput | candidaturesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: candidaturesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` candidatures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` candidatures.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned candidatures
    **/
    _count?: true | CandidaturesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CandidaturesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CandidaturesMaxAggregateInputType
  }

  export type GetCandidaturesAggregateType<T extends CandidaturesAggregateArgs> = {
        [P in keyof T & keyof AggregateCandidatures]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCandidatures[P]>
      : GetScalarType<T[P], AggregateCandidatures[P]>
  }




  export type candidaturesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: candidaturesWhereInput
    orderBy?: candidaturesOrderByWithAggregationInput | candidaturesOrderByWithAggregationInput[]
    by: CandidaturesScalarFieldEnum[] | CandidaturesScalarFieldEnum
    having?: candidaturesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CandidaturesCountAggregateInputType | true
    _min?: CandidaturesMinAggregateInputType
    _max?: CandidaturesMaxAggregateInputType
  }

  export type CandidaturesGroupByOutputType = {
    id: string
    mission_id: string | null
    user_id: string | null
    lettre_motivation: string | null
    status: string | null
    created_at: Date | null
    _count: CandidaturesCountAggregateOutputType | null
    _min: CandidaturesMinAggregateOutputType | null
    _max: CandidaturesMaxAggregateOutputType | null
  }

  type GetCandidaturesGroupByPayload<T extends candidaturesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CandidaturesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CandidaturesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CandidaturesGroupByOutputType[P]>
            : GetScalarType<T[P], CandidaturesGroupByOutputType[P]>
        }
      >
    >


  export type candidaturesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    mission_id?: boolean
    user_id?: boolean
    lettre_motivation?: boolean
    status?: boolean
    created_at?: boolean
    missions?: boolean | candidatures$missionsArgs<ExtArgs>
    users?: boolean | candidatures$usersArgs<ExtArgs>
  }, ExtArgs["result"]["candidatures"]>

  export type candidaturesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    mission_id?: boolean
    user_id?: boolean
    lettre_motivation?: boolean
    status?: boolean
    created_at?: boolean
    missions?: boolean | candidatures$missionsArgs<ExtArgs>
    users?: boolean | candidatures$usersArgs<ExtArgs>
  }, ExtArgs["result"]["candidatures"]>

  export type candidaturesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    mission_id?: boolean
    user_id?: boolean
    lettre_motivation?: boolean
    status?: boolean
    created_at?: boolean
    missions?: boolean | candidatures$missionsArgs<ExtArgs>
    users?: boolean | candidatures$usersArgs<ExtArgs>
  }, ExtArgs["result"]["candidatures"]>

  export type candidaturesSelectScalar = {
    id?: boolean
    mission_id?: boolean
    user_id?: boolean
    lettre_motivation?: boolean
    status?: boolean
    created_at?: boolean
  }

  export type candidaturesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "mission_id" | "user_id" | "lettre_motivation" | "status" | "created_at", ExtArgs["result"]["candidatures"]>
  export type candidaturesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    missions?: boolean | candidatures$missionsArgs<ExtArgs>
    users?: boolean | candidatures$usersArgs<ExtArgs>
  }
  export type candidaturesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    missions?: boolean | candidatures$missionsArgs<ExtArgs>
    users?: boolean | candidatures$usersArgs<ExtArgs>
  }
  export type candidaturesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    missions?: boolean | candidatures$missionsArgs<ExtArgs>
    users?: boolean | candidatures$usersArgs<ExtArgs>
  }

  export type $candidaturesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "candidatures"
    objects: {
      missions: Prisma.$missionsPayload<ExtArgs> | null
      users: Prisma.$usersPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      mission_id: string | null
      user_id: string | null
      lettre_motivation: string | null
      status: string | null
      created_at: Date | null
    }, ExtArgs["result"]["candidatures"]>
    composites: {}
  }

  type candidaturesGetPayload<S extends boolean | null | undefined | candidaturesDefaultArgs> = $Result.GetResult<Prisma.$candidaturesPayload, S>

  type candidaturesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<candidaturesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CandidaturesCountAggregateInputType | true
    }

  export interface candidaturesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['candidatures'], meta: { name: 'candidatures' } }
    /**
     * Find zero or one Candidatures that matches the filter.
     * @param {candidaturesFindUniqueArgs} args - Arguments to find a Candidatures
     * @example
     * // Get one Candidatures
     * const candidatures = await prisma.candidatures.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends candidaturesFindUniqueArgs>(args: SelectSubset<T, candidaturesFindUniqueArgs<ExtArgs>>): Prisma__candidaturesClient<$Result.GetResult<Prisma.$candidaturesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Candidatures that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {candidaturesFindUniqueOrThrowArgs} args - Arguments to find a Candidatures
     * @example
     * // Get one Candidatures
     * const candidatures = await prisma.candidatures.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends candidaturesFindUniqueOrThrowArgs>(args: SelectSubset<T, candidaturesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__candidaturesClient<$Result.GetResult<Prisma.$candidaturesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Candidatures that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {candidaturesFindFirstArgs} args - Arguments to find a Candidatures
     * @example
     * // Get one Candidatures
     * const candidatures = await prisma.candidatures.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends candidaturesFindFirstArgs>(args?: SelectSubset<T, candidaturesFindFirstArgs<ExtArgs>>): Prisma__candidaturesClient<$Result.GetResult<Prisma.$candidaturesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Candidatures that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {candidaturesFindFirstOrThrowArgs} args - Arguments to find a Candidatures
     * @example
     * // Get one Candidatures
     * const candidatures = await prisma.candidatures.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends candidaturesFindFirstOrThrowArgs>(args?: SelectSubset<T, candidaturesFindFirstOrThrowArgs<ExtArgs>>): Prisma__candidaturesClient<$Result.GetResult<Prisma.$candidaturesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Candidatures that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {candidaturesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Candidatures
     * const candidatures = await prisma.candidatures.findMany()
     * 
     * // Get first 10 Candidatures
     * const candidatures = await prisma.candidatures.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const candidaturesWithIdOnly = await prisma.candidatures.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends candidaturesFindManyArgs>(args?: SelectSubset<T, candidaturesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$candidaturesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Candidatures.
     * @param {candidaturesCreateArgs} args - Arguments to create a Candidatures.
     * @example
     * // Create one Candidatures
     * const Candidatures = await prisma.candidatures.create({
     *   data: {
     *     // ... data to create a Candidatures
     *   }
     * })
     * 
     */
    create<T extends candidaturesCreateArgs>(args: SelectSubset<T, candidaturesCreateArgs<ExtArgs>>): Prisma__candidaturesClient<$Result.GetResult<Prisma.$candidaturesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Candidatures.
     * @param {candidaturesCreateManyArgs} args - Arguments to create many Candidatures.
     * @example
     * // Create many Candidatures
     * const candidatures = await prisma.candidatures.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends candidaturesCreateManyArgs>(args?: SelectSubset<T, candidaturesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Candidatures and returns the data saved in the database.
     * @param {candidaturesCreateManyAndReturnArgs} args - Arguments to create many Candidatures.
     * @example
     * // Create many Candidatures
     * const candidatures = await prisma.candidatures.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Candidatures and only return the `id`
     * const candidaturesWithIdOnly = await prisma.candidatures.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends candidaturesCreateManyAndReturnArgs>(args?: SelectSubset<T, candidaturesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$candidaturesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Candidatures.
     * @param {candidaturesDeleteArgs} args - Arguments to delete one Candidatures.
     * @example
     * // Delete one Candidatures
     * const Candidatures = await prisma.candidatures.delete({
     *   where: {
     *     // ... filter to delete one Candidatures
     *   }
     * })
     * 
     */
    delete<T extends candidaturesDeleteArgs>(args: SelectSubset<T, candidaturesDeleteArgs<ExtArgs>>): Prisma__candidaturesClient<$Result.GetResult<Prisma.$candidaturesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Candidatures.
     * @param {candidaturesUpdateArgs} args - Arguments to update one Candidatures.
     * @example
     * // Update one Candidatures
     * const candidatures = await prisma.candidatures.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends candidaturesUpdateArgs>(args: SelectSubset<T, candidaturesUpdateArgs<ExtArgs>>): Prisma__candidaturesClient<$Result.GetResult<Prisma.$candidaturesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Candidatures.
     * @param {candidaturesDeleteManyArgs} args - Arguments to filter Candidatures to delete.
     * @example
     * // Delete a few Candidatures
     * const { count } = await prisma.candidatures.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends candidaturesDeleteManyArgs>(args?: SelectSubset<T, candidaturesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Candidatures.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {candidaturesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Candidatures
     * const candidatures = await prisma.candidatures.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends candidaturesUpdateManyArgs>(args: SelectSubset<T, candidaturesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Candidatures and returns the data updated in the database.
     * @param {candidaturesUpdateManyAndReturnArgs} args - Arguments to update many Candidatures.
     * @example
     * // Update many Candidatures
     * const candidatures = await prisma.candidatures.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Candidatures and only return the `id`
     * const candidaturesWithIdOnly = await prisma.candidatures.updateManyAndReturn({
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
    updateManyAndReturn<T extends candidaturesUpdateManyAndReturnArgs>(args: SelectSubset<T, candidaturesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$candidaturesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Candidatures.
     * @param {candidaturesUpsertArgs} args - Arguments to update or create a Candidatures.
     * @example
     * // Update or create a Candidatures
     * const candidatures = await prisma.candidatures.upsert({
     *   create: {
     *     // ... data to create a Candidatures
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Candidatures we want to update
     *   }
     * })
     */
    upsert<T extends candidaturesUpsertArgs>(args: SelectSubset<T, candidaturesUpsertArgs<ExtArgs>>): Prisma__candidaturesClient<$Result.GetResult<Prisma.$candidaturesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Candidatures.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {candidaturesCountArgs} args - Arguments to filter Candidatures to count.
     * @example
     * // Count the number of Candidatures
     * const count = await prisma.candidatures.count({
     *   where: {
     *     // ... the filter for the Candidatures we want to count
     *   }
     * })
    **/
    count<T extends candidaturesCountArgs>(
      args?: Subset<T, candidaturesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CandidaturesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Candidatures.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CandidaturesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CandidaturesAggregateArgs>(args: Subset<T, CandidaturesAggregateArgs>): Prisma.PrismaPromise<GetCandidaturesAggregateType<T>>

    /**
     * Group by Candidatures.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {candidaturesGroupByArgs} args - Group by arguments.
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
      T extends candidaturesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: candidaturesGroupByArgs['orderBy'] }
        : { orderBy?: candidaturesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, candidaturesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCandidaturesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the candidatures model
   */
  readonly fields: candidaturesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for candidatures.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__candidaturesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    missions<T extends candidatures$missionsArgs<ExtArgs> = {}>(args?: Subset<T, candidatures$missionsArgs<ExtArgs>>): Prisma__missionsClient<$Result.GetResult<Prisma.$missionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    users<T extends candidatures$usersArgs<ExtArgs> = {}>(args?: Subset<T, candidatures$usersArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the candidatures model
   */
  interface candidaturesFieldRefs {
    readonly id: FieldRef<"candidatures", 'String'>
    readonly mission_id: FieldRef<"candidatures", 'String'>
    readonly user_id: FieldRef<"candidatures", 'String'>
    readonly lettre_motivation: FieldRef<"candidatures", 'String'>
    readonly status: FieldRef<"candidatures", 'String'>
    readonly created_at: FieldRef<"candidatures", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * candidatures findUnique
   */
  export type candidaturesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the candidatures
     */
    select?: candidaturesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the candidatures
     */
    omit?: candidaturesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: candidaturesInclude<ExtArgs> | null
    /**
     * Filter, which candidatures to fetch.
     */
    where: candidaturesWhereUniqueInput
  }

  /**
   * candidatures findUniqueOrThrow
   */
  export type candidaturesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the candidatures
     */
    select?: candidaturesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the candidatures
     */
    omit?: candidaturesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: candidaturesInclude<ExtArgs> | null
    /**
     * Filter, which candidatures to fetch.
     */
    where: candidaturesWhereUniqueInput
  }

  /**
   * candidatures findFirst
   */
  export type candidaturesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the candidatures
     */
    select?: candidaturesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the candidatures
     */
    omit?: candidaturesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: candidaturesInclude<ExtArgs> | null
    /**
     * Filter, which candidatures to fetch.
     */
    where?: candidaturesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of candidatures to fetch.
     */
    orderBy?: candidaturesOrderByWithRelationInput | candidaturesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for candidatures.
     */
    cursor?: candidaturesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` candidatures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` candidatures.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of candidatures.
     */
    distinct?: CandidaturesScalarFieldEnum | CandidaturesScalarFieldEnum[]
  }

  /**
   * candidatures findFirstOrThrow
   */
  export type candidaturesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the candidatures
     */
    select?: candidaturesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the candidatures
     */
    omit?: candidaturesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: candidaturesInclude<ExtArgs> | null
    /**
     * Filter, which candidatures to fetch.
     */
    where?: candidaturesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of candidatures to fetch.
     */
    orderBy?: candidaturesOrderByWithRelationInput | candidaturesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for candidatures.
     */
    cursor?: candidaturesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` candidatures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` candidatures.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of candidatures.
     */
    distinct?: CandidaturesScalarFieldEnum | CandidaturesScalarFieldEnum[]
  }

  /**
   * candidatures findMany
   */
  export type candidaturesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the candidatures
     */
    select?: candidaturesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the candidatures
     */
    omit?: candidaturesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: candidaturesInclude<ExtArgs> | null
    /**
     * Filter, which candidatures to fetch.
     */
    where?: candidaturesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of candidatures to fetch.
     */
    orderBy?: candidaturesOrderByWithRelationInput | candidaturesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing candidatures.
     */
    cursor?: candidaturesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` candidatures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` candidatures.
     */
    skip?: number
    distinct?: CandidaturesScalarFieldEnum | CandidaturesScalarFieldEnum[]
  }

  /**
   * candidatures create
   */
  export type candidaturesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the candidatures
     */
    select?: candidaturesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the candidatures
     */
    omit?: candidaturesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: candidaturesInclude<ExtArgs> | null
    /**
     * The data needed to create a candidatures.
     */
    data?: XOR<candidaturesCreateInput, candidaturesUncheckedCreateInput>
  }

  /**
   * candidatures createMany
   */
  export type candidaturesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many candidatures.
     */
    data: candidaturesCreateManyInput | candidaturesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * candidatures createManyAndReturn
   */
  export type candidaturesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the candidatures
     */
    select?: candidaturesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the candidatures
     */
    omit?: candidaturesOmit<ExtArgs> | null
    /**
     * The data used to create many candidatures.
     */
    data: candidaturesCreateManyInput | candidaturesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: candidaturesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * candidatures update
   */
  export type candidaturesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the candidatures
     */
    select?: candidaturesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the candidatures
     */
    omit?: candidaturesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: candidaturesInclude<ExtArgs> | null
    /**
     * The data needed to update a candidatures.
     */
    data: XOR<candidaturesUpdateInput, candidaturesUncheckedUpdateInput>
    /**
     * Choose, which candidatures to update.
     */
    where: candidaturesWhereUniqueInput
  }

  /**
   * candidatures updateMany
   */
  export type candidaturesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update candidatures.
     */
    data: XOR<candidaturesUpdateManyMutationInput, candidaturesUncheckedUpdateManyInput>
    /**
     * Filter which candidatures to update
     */
    where?: candidaturesWhereInput
    /**
     * Limit how many candidatures to update.
     */
    limit?: number
  }

  /**
   * candidatures updateManyAndReturn
   */
  export type candidaturesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the candidatures
     */
    select?: candidaturesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the candidatures
     */
    omit?: candidaturesOmit<ExtArgs> | null
    /**
     * The data used to update candidatures.
     */
    data: XOR<candidaturesUpdateManyMutationInput, candidaturesUncheckedUpdateManyInput>
    /**
     * Filter which candidatures to update
     */
    where?: candidaturesWhereInput
    /**
     * Limit how many candidatures to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: candidaturesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * candidatures upsert
   */
  export type candidaturesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the candidatures
     */
    select?: candidaturesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the candidatures
     */
    omit?: candidaturesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: candidaturesInclude<ExtArgs> | null
    /**
     * The filter to search for the candidatures to update in case it exists.
     */
    where: candidaturesWhereUniqueInput
    /**
     * In case the candidatures found by the `where` argument doesn't exist, create a new candidatures with this data.
     */
    create: XOR<candidaturesCreateInput, candidaturesUncheckedCreateInput>
    /**
     * In case the candidatures was found with the provided `where` argument, update it with this data.
     */
    update: XOR<candidaturesUpdateInput, candidaturesUncheckedUpdateInput>
  }

  /**
   * candidatures delete
   */
  export type candidaturesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the candidatures
     */
    select?: candidaturesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the candidatures
     */
    omit?: candidaturesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: candidaturesInclude<ExtArgs> | null
    /**
     * Filter which candidatures to delete.
     */
    where: candidaturesWhereUniqueInput
  }

  /**
   * candidatures deleteMany
   */
  export type candidaturesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which candidatures to delete
     */
    where?: candidaturesWhereInput
    /**
     * Limit how many candidatures to delete.
     */
    limit?: number
  }

  /**
   * candidatures.missions
   */
  export type candidatures$missionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the missions
     */
    select?: missionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the missions
     */
    omit?: missionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: missionsInclude<ExtArgs> | null
    where?: missionsWhereInput
  }

  /**
   * candidatures.users
   */
  export type candidatures$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    where?: usersWhereInput
  }

  /**
   * candidatures without action
   */
  export type candidaturesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the candidatures
     */
    select?: candidaturesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the candidatures
     */
    omit?: candidaturesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: candidaturesInclude<ExtArgs> | null
  }


  /**
   * Model freelance_cvs
   */

  export type AggregateFreelance_cvs = {
    _count: Freelance_cvsCountAggregateOutputType | null
    _min: Freelance_cvsMinAggregateOutputType | null
    _max: Freelance_cvsMaxAggregateOutputType | null
  }

  export type Freelance_cvsMinAggregateOutputType = {
    id: string | null
    user_id: string | null
    bio: string | null
    portfolio_url: string | null
    cv_url: string | null
    created_at: Date | null
  }

  export type Freelance_cvsMaxAggregateOutputType = {
    id: string | null
    user_id: string | null
    bio: string | null
    portfolio_url: string | null
    cv_url: string | null
    created_at: Date | null
  }

  export type Freelance_cvsCountAggregateOutputType = {
    id: number
    user_id: number
    bio: number
    skills: number
    portfolio_url: number
    cv_url: number
    created_at: number
    _all: number
  }


  export type Freelance_cvsMinAggregateInputType = {
    id?: true
    user_id?: true
    bio?: true
    portfolio_url?: true
    cv_url?: true
    created_at?: true
  }

  export type Freelance_cvsMaxAggregateInputType = {
    id?: true
    user_id?: true
    bio?: true
    portfolio_url?: true
    cv_url?: true
    created_at?: true
  }

  export type Freelance_cvsCountAggregateInputType = {
    id?: true
    user_id?: true
    bio?: true
    skills?: true
    portfolio_url?: true
    cv_url?: true
    created_at?: true
    _all?: true
  }

  export type Freelance_cvsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which freelance_cvs to aggregate.
     */
    where?: freelance_cvsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of freelance_cvs to fetch.
     */
    orderBy?: freelance_cvsOrderByWithRelationInput | freelance_cvsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: freelance_cvsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` freelance_cvs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` freelance_cvs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned freelance_cvs
    **/
    _count?: true | Freelance_cvsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Freelance_cvsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Freelance_cvsMaxAggregateInputType
  }

  export type GetFreelance_cvsAggregateType<T extends Freelance_cvsAggregateArgs> = {
        [P in keyof T & keyof AggregateFreelance_cvs]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFreelance_cvs[P]>
      : GetScalarType<T[P], AggregateFreelance_cvs[P]>
  }




  export type freelance_cvsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: freelance_cvsWhereInput
    orderBy?: freelance_cvsOrderByWithAggregationInput | freelance_cvsOrderByWithAggregationInput[]
    by: Freelance_cvsScalarFieldEnum[] | Freelance_cvsScalarFieldEnum
    having?: freelance_cvsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Freelance_cvsCountAggregateInputType | true
    _min?: Freelance_cvsMinAggregateInputType
    _max?: Freelance_cvsMaxAggregateInputType
  }

  export type Freelance_cvsGroupByOutputType = {
    id: string
    user_id: string | null
    bio: string | null
    skills: string[]
    portfolio_url: string | null
    cv_url: string | null
    created_at: Date | null
    _count: Freelance_cvsCountAggregateOutputType | null
    _min: Freelance_cvsMinAggregateOutputType | null
    _max: Freelance_cvsMaxAggregateOutputType | null
  }

  type GetFreelance_cvsGroupByPayload<T extends freelance_cvsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Freelance_cvsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Freelance_cvsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Freelance_cvsGroupByOutputType[P]>
            : GetScalarType<T[P], Freelance_cvsGroupByOutputType[P]>
        }
      >
    >


  export type freelance_cvsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    bio?: boolean
    skills?: boolean
    portfolio_url?: boolean
    cv_url?: boolean
    created_at?: boolean
    users?: boolean | freelance_cvs$usersArgs<ExtArgs>
  }, ExtArgs["result"]["freelance_cvs"]>

  export type freelance_cvsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    bio?: boolean
    skills?: boolean
    portfolio_url?: boolean
    cv_url?: boolean
    created_at?: boolean
    users?: boolean | freelance_cvs$usersArgs<ExtArgs>
  }, ExtArgs["result"]["freelance_cvs"]>

  export type freelance_cvsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    bio?: boolean
    skills?: boolean
    portfolio_url?: boolean
    cv_url?: boolean
    created_at?: boolean
    users?: boolean | freelance_cvs$usersArgs<ExtArgs>
  }, ExtArgs["result"]["freelance_cvs"]>

  export type freelance_cvsSelectScalar = {
    id?: boolean
    user_id?: boolean
    bio?: boolean
    skills?: boolean
    portfolio_url?: boolean
    cv_url?: boolean
    created_at?: boolean
  }

  export type freelance_cvsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "bio" | "skills" | "portfolio_url" | "cv_url" | "created_at", ExtArgs["result"]["freelance_cvs"]>
  export type freelance_cvsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | freelance_cvs$usersArgs<ExtArgs>
  }
  export type freelance_cvsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | freelance_cvs$usersArgs<ExtArgs>
  }
  export type freelance_cvsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | freelance_cvs$usersArgs<ExtArgs>
  }

  export type $freelance_cvsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "freelance_cvs"
    objects: {
      users: Prisma.$usersPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      user_id: string | null
      bio: string | null
      skills: string[]
      portfolio_url: string | null
      cv_url: string | null
      created_at: Date | null
    }, ExtArgs["result"]["freelance_cvs"]>
    composites: {}
  }

  type freelance_cvsGetPayload<S extends boolean | null | undefined | freelance_cvsDefaultArgs> = $Result.GetResult<Prisma.$freelance_cvsPayload, S>

  type freelance_cvsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<freelance_cvsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Freelance_cvsCountAggregateInputType | true
    }

  export interface freelance_cvsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['freelance_cvs'], meta: { name: 'freelance_cvs' } }
    /**
     * Find zero or one Freelance_cvs that matches the filter.
     * @param {freelance_cvsFindUniqueArgs} args - Arguments to find a Freelance_cvs
     * @example
     * // Get one Freelance_cvs
     * const freelance_cvs = await prisma.freelance_cvs.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends freelance_cvsFindUniqueArgs>(args: SelectSubset<T, freelance_cvsFindUniqueArgs<ExtArgs>>): Prisma__freelance_cvsClient<$Result.GetResult<Prisma.$freelance_cvsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Freelance_cvs that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {freelance_cvsFindUniqueOrThrowArgs} args - Arguments to find a Freelance_cvs
     * @example
     * // Get one Freelance_cvs
     * const freelance_cvs = await prisma.freelance_cvs.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends freelance_cvsFindUniqueOrThrowArgs>(args: SelectSubset<T, freelance_cvsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__freelance_cvsClient<$Result.GetResult<Prisma.$freelance_cvsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Freelance_cvs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {freelance_cvsFindFirstArgs} args - Arguments to find a Freelance_cvs
     * @example
     * // Get one Freelance_cvs
     * const freelance_cvs = await prisma.freelance_cvs.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends freelance_cvsFindFirstArgs>(args?: SelectSubset<T, freelance_cvsFindFirstArgs<ExtArgs>>): Prisma__freelance_cvsClient<$Result.GetResult<Prisma.$freelance_cvsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Freelance_cvs that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {freelance_cvsFindFirstOrThrowArgs} args - Arguments to find a Freelance_cvs
     * @example
     * // Get one Freelance_cvs
     * const freelance_cvs = await prisma.freelance_cvs.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends freelance_cvsFindFirstOrThrowArgs>(args?: SelectSubset<T, freelance_cvsFindFirstOrThrowArgs<ExtArgs>>): Prisma__freelance_cvsClient<$Result.GetResult<Prisma.$freelance_cvsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Freelance_cvs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {freelance_cvsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Freelance_cvs
     * const freelance_cvs = await prisma.freelance_cvs.findMany()
     * 
     * // Get first 10 Freelance_cvs
     * const freelance_cvs = await prisma.freelance_cvs.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const freelance_cvsWithIdOnly = await prisma.freelance_cvs.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends freelance_cvsFindManyArgs>(args?: SelectSubset<T, freelance_cvsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$freelance_cvsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Freelance_cvs.
     * @param {freelance_cvsCreateArgs} args - Arguments to create a Freelance_cvs.
     * @example
     * // Create one Freelance_cvs
     * const Freelance_cvs = await prisma.freelance_cvs.create({
     *   data: {
     *     // ... data to create a Freelance_cvs
     *   }
     * })
     * 
     */
    create<T extends freelance_cvsCreateArgs>(args: SelectSubset<T, freelance_cvsCreateArgs<ExtArgs>>): Prisma__freelance_cvsClient<$Result.GetResult<Prisma.$freelance_cvsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Freelance_cvs.
     * @param {freelance_cvsCreateManyArgs} args - Arguments to create many Freelance_cvs.
     * @example
     * // Create many Freelance_cvs
     * const freelance_cvs = await prisma.freelance_cvs.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends freelance_cvsCreateManyArgs>(args?: SelectSubset<T, freelance_cvsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Freelance_cvs and returns the data saved in the database.
     * @param {freelance_cvsCreateManyAndReturnArgs} args - Arguments to create many Freelance_cvs.
     * @example
     * // Create many Freelance_cvs
     * const freelance_cvs = await prisma.freelance_cvs.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Freelance_cvs and only return the `id`
     * const freelance_cvsWithIdOnly = await prisma.freelance_cvs.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends freelance_cvsCreateManyAndReturnArgs>(args?: SelectSubset<T, freelance_cvsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$freelance_cvsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Freelance_cvs.
     * @param {freelance_cvsDeleteArgs} args - Arguments to delete one Freelance_cvs.
     * @example
     * // Delete one Freelance_cvs
     * const Freelance_cvs = await prisma.freelance_cvs.delete({
     *   where: {
     *     // ... filter to delete one Freelance_cvs
     *   }
     * })
     * 
     */
    delete<T extends freelance_cvsDeleteArgs>(args: SelectSubset<T, freelance_cvsDeleteArgs<ExtArgs>>): Prisma__freelance_cvsClient<$Result.GetResult<Prisma.$freelance_cvsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Freelance_cvs.
     * @param {freelance_cvsUpdateArgs} args - Arguments to update one Freelance_cvs.
     * @example
     * // Update one Freelance_cvs
     * const freelance_cvs = await prisma.freelance_cvs.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends freelance_cvsUpdateArgs>(args: SelectSubset<T, freelance_cvsUpdateArgs<ExtArgs>>): Prisma__freelance_cvsClient<$Result.GetResult<Prisma.$freelance_cvsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Freelance_cvs.
     * @param {freelance_cvsDeleteManyArgs} args - Arguments to filter Freelance_cvs to delete.
     * @example
     * // Delete a few Freelance_cvs
     * const { count } = await prisma.freelance_cvs.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends freelance_cvsDeleteManyArgs>(args?: SelectSubset<T, freelance_cvsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Freelance_cvs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {freelance_cvsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Freelance_cvs
     * const freelance_cvs = await prisma.freelance_cvs.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends freelance_cvsUpdateManyArgs>(args: SelectSubset<T, freelance_cvsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Freelance_cvs and returns the data updated in the database.
     * @param {freelance_cvsUpdateManyAndReturnArgs} args - Arguments to update many Freelance_cvs.
     * @example
     * // Update many Freelance_cvs
     * const freelance_cvs = await prisma.freelance_cvs.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Freelance_cvs and only return the `id`
     * const freelance_cvsWithIdOnly = await prisma.freelance_cvs.updateManyAndReturn({
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
    updateManyAndReturn<T extends freelance_cvsUpdateManyAndReturnArgs>(args: SelectSubset<T, freelance_cvsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$freelance_cvsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Freelance_cvs.
     * @param {freelance_cvsUpsertArgs} args - Arguments to update or create a Freelance_cvs.
     * @example
     * // Update or create a Freelance_cvs
     * const freelance_cvs = await prisma.freelance_cvs.upsert({
     *   create: {
     *     // ... data to create a Freelance_cvs
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Freelance_cvs we want to update
     *   }
     * })
     */
    upsert<T extends freelance_cvsUpsertArgs>(args: SelectSubset<T, freelance_cvsUpsertArgs<ExtArgs>>): Prisma__freelance_cvsClient<$Result.GetResult<Prisma.$freelance_cvsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Freelance_cvs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {freelance_cvsCountArgs} args - Arguments to filter Freelance_cvs to count.
     * @example
     * // Count the number of Freelance_cvs
     * const count = await prisma.freelance_cvs.count({
     *   where: {
     *     // ... the filter for the Freelance_cvs we want to count
     *   }
     * })
    **/
    count<T extends freelance_cvsCountArgs>(
      args?: Subset<T, freelance_cvsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Freelance_cvsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Freelance_cvs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Freelance_cvsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Freelance_cvsAggregateArgs>(args: Subset<T, Freelance_cvsAggregateArgs>): Prisma.PrismaPromise<GetFreelance_cvsAggregateType<T>>

    /**
     * Group by Freelance_cvs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {freelance_cvsGroupByArgs} args - Group by arguments.
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
      T extends freelance_cvsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: freelance_cvsGroupByArgs['orderBy'] }
        : { orderBy?: freelance_cvsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, freelance_cvsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFreelance_cvsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the freelance_cvs model
   */
  readonly fields: freelance_cvsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for freelance_cvs.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__freelance_cvsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends freelance_cvs$usersArgs<ExtArgs> = {}>(args?: Subset<T, freelance_cvs$usersArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the freelance_cvs model
   */
  interface freelance_cvsFieldRefs {
    readonly id: FieldRef<"freelance_cvs", 'String'>
    readonly user_id: FieldRef<"freelance_cvs", 'String'>
    readonly bio: FieldRef<"freelance_cvs", 'String'>
    readonly skills: FieldRef<"freelance_cvs", 'String[]'>
    readonly portfolio_url: FieldRef<"freelance_cvs", 'String'>
    readonly cv_url: FieldRef<"freelance_cvs", 'String'>
    readonly created_at: FieldRef<"freelance_cvs", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * freelance_cvs findUnique
   */
  export type freelance_cvsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the freelance_cvs
     */
    select?: freelance_cvsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the freelance_cvs
     */
    omit?: freelance_cvsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: freelance_cvsInclude<ExtArgs> | null
    /**
     * Filter, which freelance_cvs to fetch.
     */
    where: freelance_cvsWhereUniqueInput
  }

  /**
   * freelance_cvs findUniqueOrThrow
   */
  export type freelance_cvsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the freelance_cvs
     */
    select?: freelance_cvsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the freelance_cvs
     */
    omit?: freelance_cvsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: freelance_cvsInclude<ExtArgs> | null
    /**
     * Filter, which freelance_cvs to fetch.
     */
    where: freelance_cvsWhereUniqueInput
  }

  /**
   * freelance_cvs findFirst
   */
  export type freelance_cvsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the freelance_cvs
     */
    select?: freelance_cvsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the freelance_cvs
     */
    omit?: freelance_cvsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: freelance_cvsInclude<ExtArgs> | null
    /**
     * Filter, which freelance_cvs to fetch.
     */
    where?: freelance_cvsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of freelance_cvs to fetch.
     */
    orderBy?: freelance_cvsOrderByWithRelationInput | freelance_cvsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for freelance_cvs.
     */
    cursor?: freelance_cvsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` freelance_cvs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` freelance_cvs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of freelance_cvs.
     */
    distinct?: Freelance_cvsScalarFieldEnum | Freelance_cvsScalarFieldEnum[]
  }

  /**
   * freelance_cvs findFirstOrThrow
   */
  export type freelance_cvsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the freelance_cvs
     */
    select?: freelance_cvsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the freelance_cvs
     */
    omit?: freelance_cvsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: freelance_cvsInclude<ExtArgs> | null
    /**
     * Filter, which freelance_cvs to fetch.
     */
    where?: freelance_cvsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of freelance_cvs to fetch.
     */
    orderBy?: freelance_cvsOrderByWithRelationInput | freelance_cvsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for freelance_cvs.
     */
    cursor?: freelance_cvsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` freelance_cvs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` freelance_cvs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of freelance_cvs.
     */
    distinct?: Freelance_cvsScalarFieldEnum | Freelance_cvsScalarFieldEnum[]
  }

  /**
   * freelance_cvs findMany
   */
  export type freelance_cvsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the freelance_cvs
     */
    select?: freelance_cvsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the freelance_cvs
     */
    omit?: freelance_cvsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: freelance_cvsInclude<ExtArgs> | null
    /**
     * Filter, which freelance_cvs to fetch.
     */
    where?: freelance_cvsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of freelance_cvs to fetch.
     */
    orderBy?: freelance_cvsOrderByWithRelationInput | freelance_cvsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing freelance_cvs.
     */
    cursor?: freelance_cvsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` freelance_cvs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` freelance_cvs.
     */
    skip?: number
    distinct?: Freelance_cvsScalarFieldEnum | Freelance_cvsScalarFieldEnum[]
  }

  /**
   * freelance_cvs create
   */
  export type freelance_cvsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the freelance_cvs
     */
    select?: freelance_cvsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the freelance_cvs
     */
    omit?: freelance_cvsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: freelance_cvsInclude<ExtArgs> | null
    /**
     * The data needed to create a freelance_cvs.
     */
    data?: XOR<freelance_cvsCreateInput, freelance_cvsUncheckedCreateInput>
  }

  /**
   * freelance_cvs createMany
   */
  export type freelance_cvsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many freelance_cvs.
     */
    data: freelance_cvsCreateManyInput | freelance_cvsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * freelance_cvs createManyAndReturn
   */
  export type freelance_cvsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the freelance_cvs
     */
    select?: freelance_cvsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the freelance_cvs
     */
    omit?: freelance_cvsOmit<ExtArgs> | null
    /**
     * The data used to create many freelance_cvs.
     */
    data: freelance_cvsCreateManyInput | freelance_cvsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: freelance_cvsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * freelance_cvs update
   */
  export type freelance_cvsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the freelance_cvs
     */
    select?: freelance_cvsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the freelance_cvs
     */
    omit?: freelance_cvsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: freelance_cvsInclude<ExtArgs> | null
    /**
     * The data needed to update a freelance_cvs.
     */
    data: XOR<freelance_cvsUpdateInput, freelance_cvsUncheckedUpdateInput>
    /**
     * Choose, which freelance_cvs to update.
     */
    where: freelance_cvsWhereUniqueInput
  }

  /**
   * freelance_cvs updateMany
   */
  export type freelance_cvsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update freelance_cvs.
     */
    data: XOR<freelance_cvsUpdateManyMutationInput, freelance_cvsUncheckedUpdateManyInput>
    /**
     * Filter which freelance_cvs to update
     */
    where?: freelance_cvsWhereInput
    /**
     * Limit how many freelance_cvs to update.
     */
    limit?: number
  }

  /**
   * freelance_cvs updateManyAndReturn
   */
  export type freelance_cvsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the freelance_cvs
     */
    select?: freelance_cvsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the freelance_cvs
     */
    omit?: freelance_cvsOmit<ExtArgs> | null
    /**
     * The data used to update freelance_cvs.
     */
    data: XOR<freelance_cvsUpdateManyMutationInput, freelance_cvsUncheckedUpdateManyInput>
    /**
     * Filter which freelance_cvs to update
     */
    where?: freelance_cvsWhereInput
    /**
     * Limit how many freelance_cvs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: freelance_cvsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * freelance_cvs upsert
   */
  export type freelance_cvsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the freelance_cvs
     */
    select?: freelance_cvsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the freelance_cvs
     */
    omit?: freelance_cvsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: freelance_cvsInclude<ExtArgs> | null
    /**
     * The filter to search for the freelance_cvs to update in case it exists.
     */
    where: freelance_cvsWhereUniqueInput
    /**
     * In case the freelance_cvs found by the `where` argument doesn't exist, create a new freelance_cvs with this data.
     */
    create: XOR<freelance_cvsCreateInput, freelance_cvsUncheckedCreateInput>
    /**
     * In case the freelance_cvs was found with the provided `where` argument, update it with this data.
     */
    update: XOR<freelance_cvsUpdateInput, freelance_cvsUncheckedUpdateInput>
  }

  /**
   * freelance_cvs delete
   */
  export type freelance_cvsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the freelance_cvs
     */
    select?: freelance_cvsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the freelance_cvs
     */
    omit?: freelance_cvsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: freelance_cvsInclude<ExtArgs> | null
    /**
     * Filter which freelance_cvs to delete.
     */
    where: freelance_cvsWhereUniqueInput
  }

  /**
   * freelance_cvs deleteMany
   */
  export type freelance_cvsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which freelance_cvs to delete
     */
    where?: freelance_cvsWhereInput
    /**
     * Limit how many freelance_cvs to delete.
     */
    limit?: number
  }

  /**
   * freelance_cvs.users
   */
  export type freelance_cvs$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    where?: usersWhereInput
  }

  /**
   * freelance_cvs without action
   */
  export type freelance_cvsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the freelance_cvs
     */
    select?: freelance_cvsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the freelance_cvs
     */
    omit?: freelance_cvsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: freelance_cvsInclude<ExtArgs> | null
  }


  /**
   * Model missions
   */

  export type AggregateMissions = {
    _count: MissionsCountAggregateOutputType | null
    _avg: MissionsAvgAggregateOutputType | null
    _sum: MissionsSumAggregateOutputType | null
    _min: MissionsMinAggregateOutputType | null
    _max: MissionsMaxAggregateOutputType | null
  }

  export type MissionsAvgAggregateOutputType = {
    price: Decimal | null
  }

  export type MissionsSumAggregateOutputType = {
    price: Decimal | null
  }

  export type MissionsMinAggregateOutputType = {
    id: string | null
    user_id: string | null
    title: string | null
    description: string | null
    price: Decimal | null
    status: string | null
    created_at: Date | null
  }

  export type MissionsMaxAggregateOutputType = {
    id: string | null
    user_id: string | null
    title: string | null
    description: string | null
    price: Decimal | null
    status: string | null
    created_at: Date | null
  }

  export type MissionsCountAggregateOutputType = {
    id: number
    user_id: number
    title: number
    description: number
    price: number
    status: number
    created_at: number
    _all: number
  }


  export type MissionsAvgAggregateInputType = {
    price?: true
  }

  export type MissionsSumAggregateInputType = {
    price?: true
  }

  export type MissionsMinAggregateInputType = {
    id?: true
    user_id?: true
    title?: true
    description?: true
    price?: true
    status?: true
    created_at?: true
  }

  export type MissionsMaxAggregateInputType = {
    id?: true
    user_id?: true
    title?: true
    description?: true
    price?: true
    status?: true
    created_at?: true
  }

  export type MissionsCountAggregateInputType = {
    id?: true
    user_id?: true
    title?: true
    description?: true
    price?: true
    status?: true
    created_at?: true
    _all?: true
  }

  export type MissionsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which missions to aggregate.
     */
    where?: missionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of missions to fetch.
     */
    orderBy?: missionsOrderByWithRelationInput | missionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: missionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` missions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` missions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned missions
    **/
    _count?: true | MissionsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MissionsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MissionsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MissionsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MissionsMaxAggregateInputType
  }

  export type GetMissionsAggregateType<T extends MissionsAggregateArgs> = {
        [P in keyof T & keyof AggregateMissions]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMissions[P]>
      : GetScalarType<T[P], AggregateMissions[P]>
  }




  export type missionsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: missionsWhereInput
    orderBy?: missionsOrderByWithAggregationInput | missionsOrderByWithAggregationInput[]
    by: MissionsScalarFieldEnum[] | MissionsScalarFieldEnum
    having?: missionsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MissionsCountAggregateInputType | true
    _avg?: MissionsAvgAggregateInputType
    _sum?: MissionsSumAggregateInputType
    _min?: MissionsMinAggregateInputType
    _max?: MissionsMaxAggregateInputType
  }

  export type MissionsGroupByOutputType = {
    id: string
    user_id: string | null
    title: string
    description: string | null
    price: Decimal | null
    status: string | null
    created_at: Date | null
    _count: MissionsCountAggregateOutputType | null
    _avg: MissionsAvgAggregateOutputType | null
    _sum: MissionsSumAggregateOutputType | null
    _min: MissionsMinAggregateOutputType | null
    _max: MissionsMaxAggregateOutputType | null
  }

  type GetMissionsGroupByPayload<T extends missionsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MissionsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MissionsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MissionsGroupByOutputType[P]>
            : GetScalarType<T[P], MissionsGroupByOutputType[P]>
        }
      >
    >


  export type missionsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    title?: boolean
    description?: boolean
    price?: boolean
    status?: boolean
    created_at?: boolean
    candidatures?: boolean | missions$candidaturesArgs<ExtArgs>
    users?: boolean | missions$usersArgs<ExtArgs>
    _count?: boolean | MissionsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["missions"]>

  export type missionsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    title?: boolean
    description?: boolean
    price?: boolean
    status?: boolean
    created_at?: boolean
    users?: boolean | missions$usersArgs<ExtArgs>
  }, ExtArgs["result"]["missions"]>

  export type missionsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    title?: boolean
    description?: boolean
    price?: boolean
    status?: boolean
    created_at?: boolean
    users?: boolean | missions$usersArgs<ExtArgs>
  }, ExtArgs["result"]["missions"]>

  export type missionsSelectScalar = {
    id?: boolean
    user_id?: boolean
    title?: boolean
    description?: boolean
    price?: boolean
    status?: boolean
    created_at?: boolean
  }

  export type missionsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "title" | "description" | "price" | "status" | "created_at", ExtArgs["result"]["missions"]>
  export type missionsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    candidatures?: boolean | missions$candidaturesArgs<ExtArgs>
    users?: boolean | missions$usersArgs<ExtArgs>
    _count?: boolean | MissionsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type missionsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | missions$usersArgs<ExtArgs>
  }
  export type missionsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | missions$usersArgs<ExtArgs>
  }

  export type $missionsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "missions"
    objects: {
      candidatures: Prisma.$candidaturesPayload<ExtArgs>[]
      users: Prisma.$usersPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      user_id: string | null
      title: string
      description: string | null
      price: Prisma.Decimal | null
      status: string | null
      created_at: Date | null
    }, ExtArgs["result"]["missions"]>
    composites: {}
  }

  type missionsGetPayload<S extends boolean | null | undefined | missionsDefaultArgs> = $Result.GetResult<Prisma.$missionsPayload, S>

  type missionsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<missionsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MissionsCountAggregateInputType | true
    }

  export interface missionsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['missions'], meta: { name: 'missions' } }
    /**
     * Find zero or one Missions that matches the filter.
     * @param {missionsFindUniqueArgs} args - Arguments to find a Missions
     * @example
     * // Get one Missions
     * const missions = await prisma.missions.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends missionsFindUniqueArgs>(args: SelectSubset<T, missionsFindUniqueArgs<ExtArgs>>): Prisma__missionsClient<$Result.GetResult<Prisma.$missionsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Missions that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {missionsFindUniqueOrThrowArgs} args - Arguments to find a Missions
     * @example
     * // Get one Missions
     * const missions = await prisma.missions.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends missionsFindUniqueOrThrowArgs>(args: SelectSubset<T, missionsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__missionsClient<$Result.GetResult<Prisma.$missionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Missions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {missionsFindFirstArgs} args - Arguments to find a Missions
     * @example
     * // Get one Missions
     * const missions = await prisma.missions.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends missionsFindFirstArgs>(args?: SelectSubset<T, missionsFindFirstArgs<ExtArgs>>): Prisma__missionsClient<$Result.GetResult<Prisma.$missionsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Missions that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {missionsFindFirstOrThrowArgs} args - Arguments to find a Missions
     * @example
     * // Get one Missions
     * const missions = await prisma.missions.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends missionsFindFirstOrThrowArgs>(args?: SelectSubset<T, missionsFindFirstOrThrowArgs<ExtArgs>>): Prisma__missionsClient<$Result.GetResult<Prisma.$missionsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Missions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {missionsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Missions
     * const missions = await prisma.missions.findMany()
     * 
     * // Get first 10 Missions
     * const missions = await prisma.missions.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const missionsWithIdOnly = await prisma.missions.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends missionsFindManyArgs>(args?: SelectSubset<T, missionsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$missionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Missions.
     * @param {missionsCreateArgs} args - Arguments to create a Missions.
     * @example
     * // Create one Missions
     * const Missions = await prisma.missions.create({
     *   data: {
     *     // ... data to create a Missions
     *   }
     * })
     * 
     */
    create<T extends missionsCreateArgs>(args: SelectSubset<T, missionsCreateArgs<ExtArgs>>): Prisma__missionsClient<$Result.GetResult<Prisma.$missionsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Missions.
     * @param {missionsCreateManyArgs} args - Arguments to create many Missions.
     * @example
     * // Create many Missions
     * const missions = await prisma.missions.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends missionsCreateManyArgs>(args?: SelectSubset<T, missionsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Missions and returns the data saved in the database.
     * @param {missionsCreateManyAndReturnArgs} args - Arguments to create many Missions.
     * @example
     * // Create many Missions
     * const missions = await prisma.missions.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Missions and only return the `id`
     * const missionsWithIdOnly = await prisma.missions.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends missionsCreateManyAndReturnArgs>(args?: SelectSubset<T, missionsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$missionsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Missions.
     * @param {missionsDeleteArgs} args - Arguments to delete one Missions.
     * @example
     * // Delete one Missions
     * const Missions = await prisma.missions.delete({
     *   where: {
     *     // ... filter to delete one Missions
     *   }
     * })
     * 
     */
    delete<T extends missionsDeleteArgs>(args: SelectSubset<T, missionsDeleteArgs<ExtArgs>>): Prisma__missionsClient<$Result.GetResult<Prisma.$missionsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Missions.
     * @param {missionsUpdateArgs} args - Arguments to update one Missions.
     * @example
     * // Update one Missions
     * const missions = await prisma.missions.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends missionsUpdateArgs>(args: SelectSubset<T, missionsUpdateArgs<ExtArgs>>): Prisma__missionsClient<$Result.GetResult<Prisma.$missionsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Missions.
     * @param {missionsDeleteManyArgs} args - Arguments to filter Missions to delete.
     * @example
     * // Delete a few Missions
     * const { count } = await prisma.missions.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends missionsDeleteManyArgs>(args?: SelectSubset<T, missionsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Missions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {missionsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Missions
     * const missions = await prisma.missions.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends missionsUpdateManyArgs>(args: SelectSubset<T, missionsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Missions and returns the data updated in the database.
     * @param {missionsUpdateManyAndReturnArgs} args - Arguments to update many Missions.
     * @example
     * // Update many Missions
     * const missions = await prisma.missions.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Missions and only return the `id`
     * const missionsWithIdOnly = await prisma.missions.updateManyAndReturn({
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
    updateManyAndReturn<T extends missionsUpdateManyAndReturnArgs>(args: SelectSubset<T, missionsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$missionsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Missions.
     * @param {missionsUpsertArgs} args - Arguments to update or create a Missions.
     * @example
     * // Update or create a Missions
     * const missions = await prisma.missions.upsert({
     *   create: {
     *     // ... data to create a Missions
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Missions we want to update
     *   }
     * })
     */
    upsert<T extends missionsUpsertArgs>(args: SelectSubset<T, missionsUpsertArgs<ExtArgs>>): Prisma__missionsClient<$Result.GetResult<Prisma.$missionsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Missions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {missionsCountArgs} args - Arguments to filter Missions to count.
     * @example
     * // Count the number of Missions
     * const count = await prisma.missions.count({
     *   where: {
     *     // ... the filter for the Missions we want to count
     *   }
     * })
    **/
    count<T extends missionsCountArgs>(
      args?: Subset<T, missionsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MissionsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Missions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MissionsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MissionsAggregateArgs>(args: Subset<T, MissionsAggregateArgs>): Prisma.PrismaPromise<GetMissionsAggregateType<T>>

    /**
     * Group by Missions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {missionsGroupByArgs} args - Group by arguments.
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
      T extends missionsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: missionsGroupByArgs['orderBy'] }
        : { orderBy?: missionsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, missionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMissionsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the missions model
   */
  readonly fields: missionsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for missions.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__missionsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    candidatures<T extends missions$candidaturesArgs<ExtArgs> = {}>(args?: Subset<T, missions$candidaturesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$candidaturesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    users<T extends missions$usersArgs<ExtArgs> = {}>(args?: Subset<T, missions$usersArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the missions model
   */
  interface missionsFieldRefs {
    readonly id: FieldRef<"missions", 'String'>
    readonly user_id: FieldRef<"missions", 'String'>
    readonly title: FieldRef<"missions", 'String'>
    readonly description: FieldRef<"missions", 'String'>
    readonly price: FieldRef<"missions", 'Decimal'>
    readonly status: FieldRef<"missions", 'String'>
    readonly created_at: FieldRef<"missions", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * missions findUnique
   */
  export type missionsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the missions
     */
    select?: missionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the missions
     */
    omit?: missionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: missionsInclude<ExtArgs> | null
    /**
     * Filter, which missions to fetch.
     */
    where: missionsWhereUniqueInput
  }

  /**
   * missions findUniqueOrThrow
   */
  export type missionsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the missions
     */
    select?: missionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the missions
     */
    omit?: missionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: missionsInclude<ExtArgs> | null
    /**
     * Filter, which missions to fetch.
     */
    where: missionsWhereUniqueInput
  }

  /**
   * missions findFirst
   */
  export type missionsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the missions
     */
    select?: missionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the missions
     */
    omit?: missionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: missionsInclude<ExtArgs> | null
    /**
     * Filter, which missions to fetch.
     */
    where?: missionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of missions to fetch.
     */
    orderBy?: missionsOrderByWithRelationInput | missionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for missions.
     */
    cursor?: missionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` missions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` missions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of missions.
     */
    distinct?: MissionsScalarFieldEnum | MissionsScalarFieldEnum[]
  }

  /**
   * missions findFirstOrThrow
   */
  export type missionsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the missions
     */
    select?: missionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the missions
     */
    omit?: missionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: missionsInclude<ExtArgs> | null
    /**
     * Filter, which missions to fetch.
     */
    where?: missionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of missions to fetch.
     */
    orderBy?: missionsOrderByWithRelationInput | missionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for missions.
     */
    cursor?: missionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` missions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` missions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of missions.
     */
    distinct?: MissionsScalarFieldEnum | MissionsScalarFieldEnum[]
  }

  /**
   * missions findMany
   */
  export type missionsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the missions
     */
    select?: missionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the missions
     */
    omit?: missionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: missionsInclude<ExtArgs> | null
    /**
     * Filter, which missions to fetch.
     */
    where?: missionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of missions to fetch.
     */
    orderBy?: missionsOrderByWithRelationInput | missionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing missions.
     */
    cursor?: missionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` missions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` missions.
     */
    skip?: number
    distinct?: MissionsScalarFieldEnum | MissionsScalarFieldEnum[]
  }

  /**
   * missions create
   */
  export type missionsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the missions
     */
    select?: missionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the missions
     */
    omit?: missionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: missionsInclude<ExtArgs> | null
    /**
     * The data needed to create a missions.
     */
    data: XOR<missionsCreateInput, missionsUncheckedCreateInput>
  }

  /**
   * missions createMany
   */
  export type missionsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many missions.
     */
    data: missionsCreateManyInput | missionsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * missions createManyAndReturn
   */
  export type missionsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the missions
     */
    select?: missionsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the missions
     */
    omit?: missionsOmit<ExtArgs> | null
    /**
     * The data used to create many missions.
     */
    data: missionsCreateManyInput | missionsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: missionsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * missions update
   */
  export type missionsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the missions
     */
    select?: missionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the missions
     */
    omit?: missionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: missionsInclude<ExtArgs> | null
    /**
     * The data needed to update a missions.
     */
    data: XOR<missionsUpdateInput, missionsUncheckedUpdateInput>
    /**
     * Choose, which missions to update.
     */
    where: missionsWhereUniqueInput
  }

  /**
   * missions updateMany
   */
  export type missionsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update missions.
     */
    data: XOR<missionsUpdateManyMutationInput, missionsUncheckedUpdateManyInput>
    /**
     * Filter which missions to update
     */
    where?: missionsWhereInput
    /**
     * Limit how many missions to update.
     */
    limit?: number
  }

  /**
   * missions updateManyAndReturn
   */
  export type missionsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the missions
     */
    select?: missionsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the missions
     */
    omit?: missionsOmit<ExtArgs> | null
    /**
     * The data used to update missions.
     */
    data: XOR<missionsUpdateManyMutationInput, missionsUncheckedUpdateManyInput>
    /**
     * Filter which missions to update
     */
    where?: missionsWhereInput
    /**
     * Limit how many missions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: missionsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * missions upsert
   */
  export type missionsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the missions
     */
    select?: missionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the missions
     */
    omit?: missionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: missionsInclude<ExtArgs> | null
    /**
     * The filter to search for the missions to update in case it exists.
     */
    where: missionsWhereUniqueInput
    /**
     * In case the missions found by the `where` argument doesn't exist, create a new missions with this data.
     */
    create: XOR<missionsCreateInput, missionsUncheckedCreateInput>
    /**
     * In case the missions was found with the provided `where` argument, update it with this data.
     */
    update: XOR<missionsUpdateInput, missionsUncheckedUpdateInput>
  }

  /**
   * missions delete
   */
  export type missionsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the missions
     */
    select?: missionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the missions
     */
    omit?: missionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: missionsInclude<ExtArgs> | null
    /**
     * Filter which missions to delete.
     */
    where: missionsWhereUniqueInput
  }

  /**
   * missions deleteMany
   */
  export type missionsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which missions to delete
     */
    where?: missionsWhereInput
    /**
     * Limit how many missions to delete.
     */
    limit?: number
  }

  /**
   * missions.candidatures
   */
  export type missions$candidaturesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the candidatures
     */
    select?: candidaturesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the candidatures
     */
    omit?: candidaturesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: candidaturesInclude<ExtArgs> | null
    where?: candidaturesWhereInput
    orderBy?: candidaturesOrderByWithRelationInput | candidaturesOrderByWithRelationInput[]
    cursor?: candidaturesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CandidaturesScalarFieldEnum | CandidaturesScalarFieldEnum[]
  }

  /**
   * missions.users
   */
  export type missions$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    where?: usersWhereInput
  }

  /**
   * missions without action
   */
  export type missionsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the missions
     */
    select?: missionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the missions
     */
    omit?: missionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: missionsInclude<ExtArgs> | null
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
    email: string | null
    password: string | null
    name: string | null
    role: string | null
    created_at: Date | null
  }

  export type UsersMaxAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    name: string | null
    role: string | null
    created_at: Date | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    email: number
    password: number
    name: number
    role: number
    created_at: number
    _all: number
  }


  export type UsersMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    role?: true
    created_at?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    role?: true
    created_at?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    role?: true
    created_at?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to aggregate.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
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




  export type usersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
    orderBy?: usersOrderByWithAggregationInput | usersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: string
    email: string
    password: string
    name: string
    role: string
    created_at: Date | null
    _count: UsersCountAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends usersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type usersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    role?: boolean
    created_at?: boolean
    candidatures?: boolean | users$candidaturesArgs<ExtArgs>
    freelance_cvs?: boolean | users$freelance_cvsArgs<ExtArgs>
    missions?: boolean | users$missionsArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type usersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    role?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    role?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    role?: boolean
    created_at?: boolean
  }

  export type usersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "name" | "role" | "created_at", ExtArgs["result"]["users"]>
  export type usersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    candidatures?: boolean | users$candidaturesArgs<ExtArgs>
    freelance_cvs?: boolean | users$freelance_cvsArgs<ExtArgs>
    missions?: boolean | users$missionsArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type usersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type usersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $usersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "users"
    objects: {
      candidatures: Prisma.$candidaturesPayload<ExtArgs>[]
      freelance_cvs: Prisma.$freelance_cvsPayload<ExtArgs>[]
      missions: Prisma.$missionsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      password: string
      name: string
      role: string
      created_at: Date | null
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type usersGetPayload<S extends boolean | null | undefined | usersDefaultArgs> = $Result.GetResult<Prisma.$usersPayload, S>

  type usersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface usersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['users'], meta: { name: 'users' } }
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
     */
    findUnique<T extends usersFindUniqueArgs>(args: SelectSubset<T, usersFindUniqueArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usersFindUniqueOrThrowArgs>(args: SelectSubset<T, usersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     */
    findFirst<T extends usersFindFirstArgs>(args?: SelectSubset<T, usersFindFirstArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
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
     */
    findFirstOrThrow<T extends usersFindFirstOrThrowArgs>(args?: SelectSubset<T, usersFindFirstOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindManyArgs} args - Arguments to filter and select certain fields only.
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
     */
    findMany<T extends usersFindManyArgs>(args?: SelectSubset<T, usersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

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
     */
    create<T extends usersCreateArgs>(args: SelectSubset<T, usersCreateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {usersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usersCreateManyArgs>(args?: SelectSubset<T, usersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {usersCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends usersCreateManyAndReturnArgs>(args?: SelectSubset<T, usersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

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
     */
    delete<T extends usersDeleteArgs>(args: SelectSubset<T, usersDeleteArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     */
    update<T extends usersUpdateArgs>(args: SelectSubset<T, usersUpdateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     */
    deleteMany<T extends usersDeleteManyArgs>(args?: SelectSubset<T, usersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

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
     */
    updateMany<T extends usersUpdateManyArgs>(args: SelectSubset<T, usersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {usersUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.updateManyAndReturn({
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
    updateManyAndReturn<T extends usersUpdateManyAndReturnArgs>(args: SelectSubset<T, usersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

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
     */
    upsert<T extends usersUpsertArgs>(args: SelectSubset<T, usersUpsertArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


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
      T extends $Utils.Record<'select', any>
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
     * @param {usersGroupByArgs} args - Group by arguments.
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
      T extends usersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usersGroupByArgs['orderBy'] }
        : { orderBy?: usersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, usersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the users model
   */
  readonly fields: usersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    candidatures<T extends users$candidaturesArgs<ExtArgs> = {}>(args?: Subset<T, users$candidaturesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$candidaturesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    freelance_cvs<T extends users$freelance_cvsArgs<ExtArgs> = {}>(args?: Subset<T, users$freelance_cvsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$freelance_cvsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    missions<T extends users$missionsArgs<ExtArgs> = {}>(args?: Subset<T, users$missionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$missionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the users model
   */
  interface usersFieldRefs {
    readonly id: FieldRef<"users", 'String'>
    readonly email: FieldRef<"users", 'String'>
    readonly password: FieldRef<"users", 'String'>
    readonly name: FieldRef<"users", 'String'>
    readonly role: FieldRef<"users", 'String'>
    readonly created_at: FieldRef<"users", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * users findUnique
   */
  export type usersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findUniqueOrThrow
   */
  export type usersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findFirst
   */
  export type usersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
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
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findFirstOrThrow
   */
  export type usersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
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
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findMany
   */
  export type usersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
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
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users create
   */
  export type usersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to create a users.
     */
    data: XOR<usersCreateInput, usersUncheckedCreateInput>
  }

  /**
   * users createMany
   */
  export type usersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users createManyAndReturn
   */
  export type usersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users update
   */
  export type usersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
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
  export type usersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users updateManyAndReturn
   */
  export type usersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users upsert
   */
  export type usersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
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
  export type usersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter which users to delete.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users deleteMany
   */
  export type usersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: usersWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * users.candidatures
   */
  export type users$candidaturesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the candidatures
     */
    select?: candidaturesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the candidatures
     */
    omit?: candidaturesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: candidaturesInclude<ExtArgs> | null
    where?: candidaturesWhereInput
    orderBy?: candidaturesOrderByWithRelationInput | candidaturesOrderByWithRelationInput[]
    cursor?: candidaturesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CandidaturesScalarFieldEnum | CandidaturesScalarFieldEnum[]
  }

  /**
   * users.freelance_cvs
   */
  export type users$freelance_cvsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the freelance_cvs
     */
    select?: freelance_cvsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the freelance_cvs
     */
    omit?: freelance_cvsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: freelance_cvsInclude<ExtArgs> | null
    where?: freelance_cvsWhereInput
    orderBy?: freelance_cvsOrderByWithRelationInput | freelance_cvsOrderByWithRelationInput[]
    cursor?: freelance_cvsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Freelance_cvsScalarFieldEnum | Freelance_cvsScalarFieldEnum[]
  }

  /**
   * users.missions
   */
  export type users$missionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the missions
     */
    select?: missionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the missions
     */
    omit?: missionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: missionsInclude<ExtArgs> | null
    where?: missionsWhereInput
    orderBy?: missionsOrderByWithRelationInput | missionsOrderByWithRelationInput[]
    cursor?: missionsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MissionsScalarFieldEnum | MissionsScalarFieldEnum[]
  }

  /**
   * users without action
   */
  export type usersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
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


  export const CandidaturesScalarFieldEnum: {
    id: 'id',
    mission_id: 'mission_id',
    user_id: 'user_id',
    lettre_motivation: 'lettre_motivation',
    status: 'status',
    created_at: 'created_at'
  };

  export type CandidaturesScalarFieldEnum = (typeof CandidaturesScalarFieldEnum)[keyof typeof CandidaturesScalarFieldEnum]


  export const Freelance_cvsScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    bio: 'bio',
    skills: 'skills',
    portfolio_url: 'portfolio_url',
    cv_url: 'cv_url',
    created_at: 'created_at'
  };

  export type Freelance_cvsScalarFieldEnum = (typeof Freelance_cvsScalarFieldEnum)[keyof typeof Freelance_cvsScalarFieldEnum]


  export const MissionsScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    title: 'title',
    description: 'description',
    price: 'price',
    status: 'status',
    created_at: 'created_at'
  };

  export type MissionsScalarFieldEnum = (typeof MissionsScalarFieldEnum)[keyof typeof MissionsScalarFieldEnum]


  export const UsersScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    name: 'name',
    role: 'role',
    created_at: 'created_at'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


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
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type candidaturesWhereInput = {
    AND?: candidaturesWhereInput | candidaturesWhereInput[]
    OR?: candidaturesWhereInput[]
    NOT?: candidaturesWhereInput | candidaturesWhereInput[]
    id?: UuidFilter<"candidatures"> | string
    mission_id?: UuidNullableFilter<"candidatures"> | string | null
    user_id?: UuidNullableFilter<"candidatures"> | string | null
    lettre_motivation?: StringNullableFilter<"candidatures"> | string | null
    status?: StringNullableFilter<"candidatures"> | string | null
    created_at?: DateTimeNullableFilter<"candidatures"> | Date | string | null
    missions?: XOR<MissionsNullableScalarRelationFilter, missionsWhereInput> | null
    users?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
  }

  export type candidaturesOrderByWithRelationInput = {
    id?: SortOrder
    mission_id?: SortOrderInput | SortOrder
    user_id?: SortOrderInput | SortOrder
    lettre_motivation?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    missions?: missionsOrderByWithRelationInput
    users?: usersOrderByWithRelationInput
  }

  export type candidaturesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: candidaturesWhereInput | candidaturesWhereInput[]
    OR?: candidaturesWhereInput[]
    NOT?: candidaturesWhereInput | candidaturesWhereInput[]
    mission_id?: UuidNullableFilter<"candidatures"> | string | null
    user_id?: UuidNullableFilter<"candidatures"> | string | null
    lettre_motivation?: StringNullableFilter<"candidatures"> | string | null
    status?: StringNullableFilter<"candidatures"> | string | null
    created_at?: DateTimeNullableFilter<"candidatures"> | Date | string | null
    missions?: XOR<MissionsNullableScalarRelationFilter, missionsWhereInput> | null
    users?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
  }, "id">

  export type candidaturesOrderByWithAggregationInput = {
    id?: SortOrder
    mission_id?: SortOrderInput | SortOrder
    user_id?: SortOrderInput | SortOrder
    lettre_motivation?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    _count?: candidaturesCountOrderByAggregateInput
    _max?: candidaturesMaxOrderByAggregateInput
    _min?: candidaturesMinOrderByAggregateInput
  }

  export type candidaturesScalarWhereWithAggregatesInput = {
    AND?: candidaturesScalarWhereWithAggregatesInput | candidaturesScalarWhereWithAggregatesInput[]
    OR?: candidaturesScalarWhereWithAggregatesInput[]
    NOT?: candidaturesScalarWhereWithAggregatesInput | candidaturesScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"candidatures"> | string
    mission_id?: UuidNullableWithAggregatesFilter<"candidatures"> | string | null
    user_id?: UuidNullableWithAggregatesFilter<"candidatures"> | string | null
    lettre_motivation?: StringNullableWithAggregatesFilter<"candidatures"> | string | null
    status?: StringNullableWithAggregatesFilter<"candidatures"> | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"candidatures"> | Date | string | null
  }

  export type freelance_cvsWhereInput = {
    AND?: freelance_cvsWhereInput | freelance_cvsWhereInput[]
    OR?: freelance_cvsWhereInput[]
    NOT?: freelance_cvsWhereInput | freelance_cvsWhereInput[]
    id?: UuidFilter<"freelance_cvs"> | string
    user_id?: UuidNullableFilter<"freelance_cvs"> | string | null
    bio?: StringNullableFilter<"freelance_cvs"> | string | null
    skills?: StringNullableListFilter<"freelance_cvs">
    portfolio_url?: StringNullableFilter<"freelance_cvs"> | string | null
    cv_url?: StringNullableFilter<"freelance_cvs"> | string | null
    created_at?: DateTimeNullableFilter<"freelance_cvs"> | Date | string | null
    users?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
  }

  export type freelance_cvsOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
    skills?: SortOrder
    portfolio_url?: SortOrderInput | SortOrder
    cv_url?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    users?: usersOrderByWithRelationInput
  }

  export type freelance_cvsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: freelance_cvsWhereInput | freelance_cvsWhereInput[]
    OR?: freelance_cvsWhereInput[]
    NOT?: freelance_cvsWhereInput | freelance_cvsWhereInput[]
    user_id?: UuidNullableFilter<"freelance_cvs"> | string | null
    bio?: StringNullableFilter<"freelance_cvs"> | string | null
    skills?: StringNullableListFilter<"freelance_cvs">
    portfolio_url?: StringNullableFilter<"freelance_cvs"> | string | null
    cv_url?: StringNullableFilter<"freelance_cvs"> | string | null
    created_at?: DateTimeNullableFilter<"freelance_cvs"> | Date | string | null
    users?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
  }, "id">

  export type freelance_cvsOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
    skills?: SortOrder
    portfolio_url?: SortOrderInput | SortOrder
    cv_url?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    _count?: freelance_cvsCountOrderByAggregateInput
    _max?: freelance_cvsMaxOrderByAggregateInput
    _min?: freelance_cvsMinOrderByAggregateInput
  }

  export type freelance_cvsScalarWhereWithAggregatesInput = {
    AND?: freelance_cvsScalarWhereWithAggregatesInput | freelance_cvsScalarWhereWithAggregatesInput[]
    OR?: freelance_cvsScalarWhereWithAggregatesInput[]
    NOT?: freelance_cvsScalarWhereWithAggregatesInput | freelance_cvsScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"freelance_cvs"> | string
    user_id?: UuidNullableWithAggregatesFilter<"freelance_cvs"> | string | null
    bio?: StringNullableWithAggregatesFilter<"freelance_cvs"> | string | null
    skills?: StringNullableListFilter<"freelance_cvs">
    portfolio_url?: StringNullableWithAggregatesFilter<"freelance_cvs"> | string | null
    cv_url?: StringNullableWithAggregatesFilter<"freelance_cvs"> | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"freelance_cvs"> | Date | string | null
  }

  export type missionsWhereInput = {
    AND?: missionsWhereInput | missionsWhereInput[]
    OR?: missionsWhereInput[]
    NOT?: missionsWhereInput | missionsWhereInput[]
    id?: UuidFilter<"missions"> | string
    user_id?: UuidNullableFilter<"missions"> | string | null
    title?: StringFilter<"missions"> | string
    description?: StringNullableFilter<"missions"> | string | null
    price?: DecimalNullableFilter<"missions"> | Decimal | DecimalJsLike | number | string | null
    status?: StringNullableFilter<"missions"> | string | null
    created_at?: DateTimeNullableFilter<"missions"> | Date | string | null
    candidatures?: CandidaturesListRelationFilter
    users?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
  }

  export type missionsOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrderInput | SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    price?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    candidatures?: candidaturesOrderByRelationAggregateInput
    users?: usersOrderByWithRelationInput
  }

  export type missionsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: missionsWhereInput | missionsWhereInput[]
    OR?: missionsWhereInput[]
    NOT?: missionsWhereInput | missionsWhereInput[]
    user_id?: UuidNullableFilter<"missions"> | string | null
    title?: StringFilter<"missions"> | string
    description?: StringNullableFilter<"missions"> | string | null
    price?: DecimalNullableFilter<"missions"> | Decimal | DecimalJsLike | number | string | null
    status?: StringNullableFilter<"missions"> | string | null
    created_at?: DateTimeNullableFilter<"missions"> | Date | string | null
    candidatures?: CandidaturesListRelationFilter
    users?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
  }, "id">

  export type missionsOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrderInput | SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    price?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    _count?: missionsCountOrderByAggregateInput
    _avg?: missionsAvgOrderByAggregateInput
    _max?: missionsMaxOrderByAggregateInput
    _min?: missionsMinOrderByAggregateInput
    _sum?: missionsSumOrderByAggregateInput
  }

  export type missionsScalarWhereWithAggregatesInput = {
    AND?: missionsScalarWhereWithAggregatesInput | missionsScalarWhereWithAggregatesInput[]
    OR?: missionsScalarWhereWithAggregatesInput[]
    NOT?: missionsScalarWhereWithAggregatesInput | missionsScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"missions"> | string
    user_id?: UuidNullableWithAggregatesFilter<"missions"> | string | null
    title?: StringWithAggregatesFilter<"missions"> | string
    description?: StringNullableWithAggregatesFilter<"missions"> | string | null
    price?: DecimalNullableWithAggregatesFilter<"missions"> | Decimal | DecimalJsLike | number | string | null
    status?: StringNullableWithAggregatesFilter<"missions"> | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"missions"> | Date | string | null
  }

  export type usersWhereInput = {
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    id?: UuidFilter<"users"> | string
    email?: StringFilter<"users"> | string
    password?: StringFilter<"users"> | string
    name?: StringFilter<"users"> | string
    role?: StringFilter<"users"> | string
    created_at?: DateTimeNullableFilter<"users"> | Date | string | null
    candidatures?: CandidaturesListRelationFilter
    freelance_cvs?: Freelance_cvsListRelationFilter
    missions?: MissionsListRelationFilter
  }

  export type usersOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role?: SortOrder
    created_at?: SortOrderInput | SortOrder
    candidatures?: candidaturesOrderByRelationAggregateInput
    freelance_cvs?: freelance_cvsOrderByRelationAggregateInput
    missions?: missionsOrderByRelationAggregateInput
  }

  export type usersWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    password?: StringFilter<"users"> | string
    name?: StringFilter<"users"> | string
    role?: StringFilter<"users"> | string
    created_at?: DateTimeNullableFilter<"users"> | Date | string | null
    candidatures?: CandidaturesListRelationFilter
    freelance_cvs?: Freelance_cvsListRelationFilter
    missions?: MissionsListRelationFilter
  }, "id" | "email">

  export type usersOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role?: SortOrder
    created_at?: SortOrderInput | SortOrder
    _count?: usersCountOrderByAggregateInput
    _max?: usersMaxOrderByAggregateInput
    _min?: usersMinOrderByAggregateInput
  }

  export type usersScalarWhereWithAggregatesInput = {
    AND?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    OR?: usersScalarWhereWithAggregatesInput[]
    NOT?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"users"> | string
    email?: StringWithAggregatesFilter<"users"> | string
    password?: StringWithAggregatesFilter<"users"> | string
    name?: StringWithAggregatesFilter<"users"> | string
    role?: StringWithAggregatesFilter<"users"> | string
    created_at?: DateTimeNullableWithAggregatesFilter<"users"> | Date | string | null
  }

  export type candidaturesCreateInput = {
    id?: string
    lettre_motivation?: string | null
    status?: string | null
    created_at?: Date | string | null
    missions?: missionsCreateNestedOneWithoutCandidaturesInput
    users?: usersCreateNestedOneWithoutCandidaturesInput
  }

  export type candidaturesUncheckedCreateInput = {
    id?: string
    mission_id?: string | null
    user_id?: string | null
    lettre_motivation?: string | null
    status?: string | null
    created_at?: Date | string | null
  }

  export type candidaturesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    lettre_motivation?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    missions?: missionsUpdateOneWithoutCandidaturesNestedInput
    users?: usersUpdateOneWithoutCandidaturesNestedInput
  }

  export type candidaturesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    mission_id?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    lettre_motivation?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type candidaturesCreateManyInput = {
    id?: string
    mission_id?: string | null
    user_id?: string | null
    lettre_motivation?: string | null
    status?: string | null
    created_at?: Date | string | null
  }

  export type candidaturesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    lettre_motivation?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type candidaturesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    mission_id?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    lettre_motivation?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type freelance_cvsCreateInput = {
    id?: string
    bio?: string | null
    skills?: freelance_cvsCreateskillsInput | string[]
    portfolio_url?: string | null
    cv_url?: string | null
    created_at?: Date | string | null
    users?: usersCreateNestedOneWithoutFreelance_cvsInput
  }

  export type freelance_cvsUncheckedCreateInput = {
    id?: string
    user_id?: string | null
    bio?: string | null
    skills?: freelance_cvsCreateskillsInput | string[]
    portfolio_url?: string | null
    cv_url?: string | null
    created_at?: Date | string | null
  }

  export type freelance_cvsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    skills?: freelance_cvsUpdateskillsInput | string[]
    portfolio_url?: NullableStringFieldUpdateOperationsInput | string | null
    cv_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: usersUpdateOneWithoutFreelance_cvsNestedInput
  }

  export type freelance_cvsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    skills?: freelance_cvsUpdateskillsInput | string[]
    portfolio_url?: NullableStringFieldUpdateOperationsInput | string | null
    cv_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type freelance_cvsCreateManyInput = {
    id?: string
    user_id?: string | null
    bio?: string | null
    skills?: freelance_cvsCreateskillsInput | string[]
    portfolio_url?: string | null
    cv_url?: string | null
    created_at?: Date | string | null
  }

  export type freelance_cvsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    skills?: freelance_cvsUpdateskillsInput | string[]
    portfolio_url?: NullableStringFieldUpdateOperationsInput | string | null
    cv_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type freelance_cvsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    skills?: freelance_cvsUpdateskillsInput | string[]
    portfolio_url?: NullableStringFieldUpdateOperationsInput | string | null
    cv_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type missionsCreateInput = {
    id?: string
    title: string
    description?: string | null
    price?: Decimal | DecimalJsLike | number | string | null
    status?: string | null
    created_at?: Date | string | null
    candidatures?: candidaturesCreateNestedManyWithoutMissionsInput
    users?: usersCreateNestedOneWithoutMissionsInput
  }

  export type missionsUncheckedCreateInput = {
    id?: string
    user_id?: string | null
    title: string
    description?: string | null
    price?: Decimal | DecimalJsLike | number | string | null
    status?: string | null
    created_at?: Date | string | null
    candidatures?: candidaturesUncheckedCreateNestedManyWithoutMissionsInput
  }

  export type missionsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    candidatures?: candidaturesUpdateManyWithoutMissionsNestedInput
    users?: usersUpdateOneWithoutMissionsNestedInput
  }

  export type missionsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    candidatures?: candidaturesUncheckedUpdateManyWithoutMissionsNestedInput
  }

  export type missionsCreateManyInput = {
    id?: string
    user_id?: string | null
    title: string
    description?: string | null
    price?: Decimal | DecimalJsLike | number | string | null
    status?: string | null
    created_at?: Date | string | null
  }

  export type missionsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type missionsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type usersCreateInput = {
    id?: string
    email: string
    password: string
    name: string
    role: string
    created_at?: Date | string | null
    candidatures?: candidaturesCreateNestedManyWithoutUsersInput
    freelance_cvs?: freelance_cvsCreateNestedManyWithoutUsersInput
    missions?: missionsCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateInput = {
    id?: string
    email: string
    password: string
    name: string
    role: string
    created_at?: Date | string | null
    candidatures?: candidaturesUncheckedCreateNestedManyWithoutUsersInput
    freelance_cvs?: freelance_cvsUncheckedCreateNestedManyWithoutUsersInput
    missions?: missionsUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    candidatures?: candidaturesUpdateManyWithoutUsersNestedInput
    freelance_cvs?: freelance_cvsUpdateManyWithoutUsersNestedInput
    missions?: missionsUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    candidatures?: candidaturesUncheckedUpdateManyWithoutUsersNestedInput
    freelance_cvs?: freelance_cvsUncheckedUpdateManyWithoutUsersNestedInput
    missions?: missionsUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type usersCreateManyInput = {
    id?: string
    email: string
    password: string
    name: string
    role: string
    created_at?: Date | string | null
  }

  export type usersUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type usersUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type UuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
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

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type MissionsNullableScalarRelationFilter = {
    is?: missionsWhereInput | null
    isNot?: missionsWhereInput | null
  }

  export type UsersNullableScalarRelationFilter = {
    is?: usersWhereInput | null
    isNot?: usersWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type candidaturesCountOrderByAggregateInput = {
    id?: SortOrder
    mission_id?: SortOrder
    user_id?: SortOrder
    lettre_motivation?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
  }

  export type candidaturesMaxOrderByAggregateInput = {
    id?: SortOrder
    mission_id?: SortOrder
    user_id?: SortOrder
    lettre_motivation?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
  }

  export type candidaturesMinOrderByAggregateInput = {
    id?: SortOrder
    mission_id?: SortOrder
    user_id?: SortOrder
    lettre_motivation?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
  }

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type UuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
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

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type freelance_cvsCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    bio?: SortOrder
    skills?: SortOrder
    portfolio_url?: SortOrder
    cv_url?: SortOrder
    created_at?: SortOrder
  }

  export type freelance_cvsMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    bio?: SortOrder
    portfolio_url?: SortOrder
    cv_url?: SortOrder
    created_at?: SortOrder
  }

  export type freelance_cvsMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    bio?: SortOrder
    portfolio_url?: SortOrder
    cv_url?: SortOrder
    created_at?: SortOrder
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

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type CandidaturesListRelationFilter = {
    every?: candidaturesWhereInput
    some?: candidaturesWhereInput
    none?: candidaturesWhereInput
  }

  export type candidaturesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type missionsCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    price?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
  }

  export type missionsAvgOrderByAggregateInput = {
    price?: SortOrder
  }

  export type missionsMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    price?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
  }

  export type missionsMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    price?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
  }

  export type missionsSumOrderByAggregateInput = {
    price?: SortOrder
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

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type Freelance_cvsListRelationFilter = {
    every?: freelance_cvsWhereInput
    some?: freelance_cvsWhereInput
    none?: freelance_cvsWhereInput
  }

  export type MissionsListRelationFilter = {
    every?: missionsWhereInput
    some?: missionsWhereInput
    none?: missionsWhereInput
  }

  export type freelance_cvsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type missionsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type usersCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
  }

  export type usersMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
  }

  export type usersMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
  }

  export type missionsCreateNestedOneWithoutCandidaturesInput = {
    create?: XOR<missionsCreateWithoutCandidaturesInput, missionsUncheckedCreateWithoutCandidaturesInput>
    connectOrCreate?: missionsCreateOrConnectWithoutCandidaturesInput
    connect?: missionsWhereUniqueInput
  }

  export type usersCreateNestedOneWithoutCandidaturesInput = {
    create?: XOR<usersCreateWithoutCandidaturesInput, usersUncheckedCreateWithoutCandidaturesInput>
    connectOrCreate?: usersCreateOrConnectWithoutCandidaturesInput
    connect?: usersWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type missionsUpdateOneWithoutCandidaturesNestedInput = {
    create?: XOR<missionsCreateWithoutCandidaturesInput, missionsUncheckedCreateWithoutCandidaturesInput>
    connectOrCreate?: missionsCreateOrConnectWithoutCandidaturesInput
    upsert?: missionsUpsertWithoutCandidaturesInput
    disconnect?: missionsWhereInput | boolean
    delete?: missionsWhereInput | boolean
    connect?: missionsWhereUniqueInput
    update?: XOR<XOR<missionsUpdateToOneWithWhereWithoutCandidaturesInput, missionsUpdateWithoutCandidaturesInput>, missionsUncheckedUpdateWithoutCandidaturesInput>
  }

  export type usersUpdateOneWithoutCandidaturesNestedInput = {
    create?: XOR<usersCreateWithoutCandidaturesInput, usersUncheckedCreateWithoutCandidaturesInput>
    connectOrCreate?: usersCreateOrConnectWithoutCandidaturesInput
    upsert?: usersUpsertWithoutCandidaturesInput
    disconnect?: usersWhereInput | boolean
    delete?: usersWhereInput | boolean
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutCandidaturesInput, usersUpdateWithoutCandidaturesInput>, usersUncheckedUpdateWithoutCandidaturesInput>
  }

  export type freelance_cvsCreateskillsInput = {
    set: string[]
  }

  export type usersCreateNestedOneWithoutFreelance_cvsInput = {
    create?: XOR<usersCreateWithoutFreelance_cvsInput, usersUncheckedCreateWithoutFreelance_cvsInput>
    connectOrCreate?: usersCreateOrConnectWithoutFreelance_cvsInput
    connect?: usersWhereUniqueInput
  }

  export type freelance_cvsUpdateskillsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type usersUpdateOneWithoutFreelance_cvsNestedInput = {
    create?: XOR<usersCreateWithoutFreelance_cvsInput, usersUncheckedCreateWithoutFreelance_cvsInput>
    connectOrCreate?: usersCreateOrConnectWithoutFreelance_cvsInput
    upsert?: usersUpsertWithoutFreelance_cvsInput
    disconnect?: usersWhereInput | boolean
    delete?: usersWhereInput | boolean
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutFreelance_cvsInput, usersUpdateWithoutFreelance_cvsInput>, usersUncheckedUpdateWithoutFreelance_cvsInput>
  }

  export type candidaturesCreateNestedManyWithoutMissionsInput = {
    create?: XOR<candidaturesCreateWithoutMissionsInput, candidaturesUncheckedCreateWithoutMissionsInput> | candidaturesCreateWithoutMissionsInput[] | candidaturesUncheckedCreateWithoutMissionsInput[]
    connectOrCreate?: candidaturesCreateOrConnectWithoutMissionsInput | candidaturesCreateOrConnectWithoutMissionsInput[]
    createMany?: candidaturesCreateManyMissionsInputEnvelope
    connect?: candidaturesWhereUniqueInput | candidaturesWhereUniqueInput[]
  }

  export type usersCreateNestedOneWithoutMissionsInput = {
    create?: XOR<usersCreateWithoutMissionsInput, usersUncheckedCreateWithoutMissionsInput>
    connectOrCreate?: usersCreateOrConnectWithoutMissionsInput
    connect?: usersWhereUniqueInput
  }

  export type candidaturesUncheckedCreateNestedManyWithoutMissionsInput = {
    create?: XOR<candidaturesCreateWithoutMissionsInput, candidaturesUncheckedCreateWithoutMissionsInput> | candidaturesCreateWithoutMissionsInput[] | candidaturesUncheckedCreateWithoutMissionsInput[]
    connectOrCreate?: candidaturesCreateOrConnectWithoutMissionsInput | candidaturesCreateOrConnectWithoutMissionsInput[]
    createMany?: candidaturesCreateManyMissionsInputEnvelope
    connect?: candidaturesWhereUniqueInput | candidaturesWhereUniqueInput[]
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type candidaturesUpdateManyWithoutMissionsNestedInput = {
    create?: XOR<candidaturesCreateWithoutMissionsInput, candidaturesUncheckedCreateWithoutMissionsInput> | candidaturesCreateWithoutMissionsInput[] | candidaturesUncheckedCreateWithoutMissionsInput[]
    connectOrCreate?: candidaturesCreateOrConnectWithoutMissionsInput | candidaturesCreateOrConnectWithoutMissionsInput[]
    upsert?: candidaturesUpsertWithWhereUniqueWithoutMissionsInput | candidaturesUpsertWithWhereUniqueWithoutMissionsInput[]
    createMany?: candidaturesCreateManyMissionsInputEnvelope
    set?: candidaturesWhereUniqueInput | candidaturesWhereUniqueInput[]
    disconnect?: candidaturesWhereUniqueInput | candidaturesWhereUniqueInput[]
    delete?: candidaturesWhereUniqueInput | candidaturesWhereUniqueInput[]
    connect?: candidaturesWhereUniqueInput | candidaturesWhereUniqueInput[]
    update?: candidaturesUpdateWithWhereUniqueWithoutMissionsInput | candidaturesUpdateWithWhereUniqueWithoutMissionsInput[]
    updateMany?: candidaturesUpdateManyWithWhereWithoutMissionsInput | candidaturesUpdateManyWithWhereWithoutMissionsInput[]
    deleteMany?: candidaturesScalarWhereInput | candidaturesScalarWhereInput[]
  }

  export type usersUpdateOneWithoutMissionsNestedInput = {
    create?: XOR<usersCreateWithoutMissionsInput, usersUncheckedCreateWithoutMissionsInput>
    connectOrCreate?: usersCreateOrConnectWithoutMissionsInput
    upsert?: usersUpsertWithoutMissionsInput
    disconnect?: usersWhereInput | boolean
    delete?: usersWhereInput | boolean
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutMissionsInput, usersUpdateWithoutMissionsInput>, usersUncheckedUpdateWithoutMissionsInput>
  }

  export type candidaturesUncheckedUpdateManyWithoutMissionsNestedInput = {
    create?: XOR<candidaturesCreateWithoutMissionsInput, candidaturesUncheckedCreateWithoutMissionsInput> | candidaturesCreateWithoutMissionsInput[] | candidaturesUncheckedCreateWithoutMissionsInput[]
    connectOrCreate?: candidaturesCreateOrConnectWithoutMissionsInput | candidaturesCreateOrConnectWithoutMissionsInput[]
    upsert?: candidaturesUpsertWithWhereUniqueWithoutMissionsInput | candidaturesUpsertWithWhereUniqueWithoutMissionsInput[]
    createMany?: candidaturesCreateManyMissionsInputEnvelope
    set?: candidaturesWhereUniqueInput | candidaturesWhereUniqueInput[]
    disconnect?: candidaturesWhereUniqueInput | candidaturesWhereUniqueInput[]
    delete?: candidaturesWhereUniqueInput | candidaturesWhereUniqueInput[]
    connect?: candidaturesWhereUniqueInput | candidaturesWhereUniqueInput[]
    update?: candidaturesUpdateWithWhereUniqueWithoutMissionsInput | candidaturesUpdateWithWhereUniqueWithoutMissionsInput[]
    updateMany?: candidaturesUpdateManyWithWhereWithoutMissionsInput | candidaturesUpdateManyWithWhereWithoutMissionsInput[]
    deleteMany?: candidaturesScalarWhereInput | candidaturesScalarWhereInput[]
  }

  export type candidaturesCreateNestedManyWithoutUsersInput = {
    create?: XOR<candidaturesCreateWithoutUsersInput, candidaturesUncheckedCreateWithoutUsersInput> | candidaturesCreateWithoutUsersInput[] | candidaturesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: candidaturesCreateOrConnectWithoutUsersInput | candidaturesCreateOrConnectWithoutUsersInput[]
    createMany?: candidaturesCreateManyUsersInputEnvelope
    connect?: candidaturesWhereUniqueInput | candidaturesWhereUniqueInput[]
  }

  export type freelance_cvsCreateNestedManyWithoutUsersInput = {
    create?: XOR<freelance_cvsCreateWithoutUsersInput, freelance_cvsUncheckedCreateWithoutUsersInput> | freelance_cvsCreateWithoutUsersInput[] | freelance_cvsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: freelance_cvsCreateOrConnectWithoutUsersInput | freelance_cvsCreateOrConnectWithoutUsersInput[]
    createMany?: freelance_cvsCreateManyUsersInputEnvelope
    connect?: freelance_cvsWhereUniqueInput | freelance_cvsWhereUniqueInput[]
  }

  export type missionsCreateNestedManyWithoutUsersInput = {
    create?: XOR<missionsCreateWithoutUsersInput, missionsUncheckedCreateWithoutUsersInput> | missionsCreateWithoutUsersInput[] | missionsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: missionsCreateOrConnectWithoutUsersInput | missionsCreateOrConnectWithoutUsersInput[]
    createMany?: missionsCreateManyUsersInputEnvelope
    connect?: missionsWhereUniqueInput | missionsWhereUniqueInput[]
  }

  export type candidaturesUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<candidaturesCreateWithoutUsersInput, candidaturesUncheckedCreateWithoutUsersInput> | candidaturesCreateWithoutUsersInput[] | candidaturesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: candidaturesCreateOrConnectWithoutUsersInput | candidaturesCreateOrConnectWithoutUsersInput[]
    createMany?: candidaturesCreateManyUsersInputEnvelope
    connect?: candidaturesWhereUniqueInput | candidaturesWhereUniqueInput[]
  }

  export type freelance_cvsUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<freelance_cvsCreateWithoutUsersInput, freelance_cvsUncheckedCreateWithoutUsersInput> | freelance_cvsCreateWithoutUsersInput[] | freelance_cvsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: freelance_cvsCreateOrConnectWithoutUsersInput | freelance_cvsCreateOrConnectWithoutUsersInput[]
    createMany?: freelance_cvsCreateManyUsersInputEnvelope
    connect?: freelance_cvsWhereUniqueInput | freelance_cvsWhereUniqueInput[]
  }

  export type missionsUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<missionsCreateWithoutUsersInput, missionsUncheckedCreateWithoutUsersInput> | missionsCreateWithoutUsersInput[] | missionsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: missionsCreateOrConnectWithoutUsersInput | missionsCreateOrConnectWithoutUsersInput[]
    createMany?: missionsCreateManyUsersInputEnvelope
    connect?: missionsWhereUniqueInput | missionsWhereUniqueInput[]
  }

  export type candidaturesUpdateManyWithoutUsersNestedInput = {
    create?: XOR<candidaturesCreateWithoutUsersInput, candidaturesUncheckedCreateWithoutUsersInput> | candidaturesCreateWithoutUsersInput[] | candidaturesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: candidaturesCreateOrConnectWithoutUsersInput | candidaturesCreateOrConnectWithoutUsersInput[]
    upsert?: candidaturesUpsertWithWhereUniqueWithoutUsersInput | candidaturesUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: candidaturesCreateManyUsersInputEnvelope
    set?: candidaturesWhereUniqueInput | candidaturesWhereUniqueInput[]
    disconnect?: candidaturesWhereUniqueInput | candidaturesWhereUniqueInput[]
    delete?: candidaturesWhereUniqueInput | candidaturesWhereUniqueInput[]
    connect?: candidaturesWhereUniqueInput | candidaturesWhereUniqueInput[]
    update?: candidaturesUpdateWithWhereUniqueWithoutUsersInput | candidaturesUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: candidaturesUpdateManyWithWhereWithoutUsersInput | candidaturesUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: candidaturesScalarWhereInput | candidaturesScalarWhereInput[]
  }

  export type freelance_cvsUpdateManyWithoutUsersNestedInput = {
    create?: XOR<freelance_cvsCreateWithoutUsersInput, freelance_cvsUncheckedCreateWithoutUsersInput> | freelance_cvsCreateWithoutUsersInput[] | freelance_cvsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: freelance_cvsCreateOrConnectWithoutUsersInput | freelance_cvsCreateOrConnectWithoutUsersInput[]
    upsert?: freelance_cvsUpsertWithWhereUniqueWithoutUsersInput | freelance_cvsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: freelance_cvsCreateManyUsersInputEnvelope
    set?: freelance_cvsWhereUniqueInput | freelance_cvsWhereUniqueInput[]
    disconnect?: freelance_cvsWhereUniqueInput | freelance_cvsWhereUniqueInput[]
    delete?: freelance_cvsWhereUniqueInput | freelance_cvsWhereUniqueInput[]
    connect?: freelance_cvsWhereUniqueInput | freelance_cvsWhereUniqueInput[]
    update?: freelance_cvsUpdateWithWhereUniqueWithoutUsersInput | freelance_cvsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: freelance_cvsUpdateManyWithWhereWithoutUsersInput | freelance_cvsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: freelance_cvsScalarWhereInput | freelance_cvsScalarWhereInput[]
  }

  export type missionsUpdateManyWithoutUsersNestedInput = {
    create?: XOR<missionsCreateWithoutUsersInput, missionsUncheckedCreateWithoutUsersInput> | missionsCreateWithoutUsersInput[] | missionsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: missionsCreateOrConnectWithoutUsersInput | missionsCreateOrConnectWithoutUsersInput[]
    upsert?: missionsUpsertWithWhereUniqueWithoutUsersInput | missionsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: missionsCreateManyUsersInputEnvelope
    set?: missionsWhereUniqueInput | missionsWhereUniqueInput[]
    disconnect?: missionsWhereUniqueInput | missionsWhereUniqueInput[]
    delete?: missionsWhereUniqueInput | missionsWhereUniqueInput[]
    connect?: missionsWhereUniqueInput | missionsWhereUniqueInput[]
    update?: missionsUpdateWithWhereUniqueWithoutUsersInput | missionsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: missionsUpdateManyWithWhereWithoutUsersInput | missionsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: missionsScalarWhereInput | missionsScalarWhereInput[]
  }

  export type candidaturesUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<candidaturesCreateWithoutUsersInput, candidaturesUncheckedCreateWithoutUsersInput> | candidaturesCreateWithoutUsersInput[] | candidaturesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: candidaturesCreateOrConnectWithoutUsersInput | candidaturesCreateOrConnectWithoutUsersInput[]
    upsert?: candidaturesUpsertWithWhereUniqueWithoutUsersInput | candidaturesUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: candidaturesCreateManyUsersInputEnvelope
    set?: candidaturesWhereUniqueInput | candidaturesWhereUniqueInput[]
    disconnect?: candidaturesWhereUniqueInput | candidaturesWhereUniqueInput[]
    delete?: candidaturesWhereUniqueInput | candidaturesWhereUniqueInput[]
    connect?: candidaturesWhereUniqueInput | candidaturesWhereUniqueInput[]
    update?: candidaturesUpdateWithWhereUniqueWithoutUsersInput | candidaturesUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: candidaturesUpdateManyWithWhereWithoutUsersInput | candidaturesUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: candidaturesScalarWhereInput | candidaturesScalarWhereInput[]
  }

  export type freelance_cvsUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<freelance_cvsCreateWithoutUsersInput, freelance_cvsUncheckedCreateWithoutUsersInput> | freelance_cvsCreateWithoutUsersInput[] | freelance_cvsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: freelance_cvsCreateOrConnectWithoutUsersInput | freelance_cvsCreateOrConnectWithoutUsersInput[]
    upsert?: freelance_cvsUpsertWithWhereUniqueWithoutUsersInput | freelance_cvsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: freelance_cvsCreateManyUsersInputEnvelope
    set?: freelance_cvsWhereUniqueInput | freelance_cvsWhereUniqueInput[]
    disconnect?: freelance_cvsWhereUniqueInput | freelance_cvsWhereUniqueInput[]
    delete?: freelance_cvsWhereUniqueInput | freelance_cvsWhereUniqueInput[]
    connect?: freelance_cvsWhereUniqueInput | freelance_cvsWhereUniqueInput[]
    update?: freelance_cvsUpdateWithWhereUniqueWithoutUsersInput | freelance_cvsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: freelance_cvsUpdateManyWithWhereWithoutUsersInput | freelance_cvsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: freelance_cvsScalarWhereInput | freelance_cvsScalarWhereInput[]
  }

  export type missionsUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<missionsCreateWithoutUsersInput, missionsUncheckedCreateWithoutUsersInput> | missionsCreateWithoutUsersInput[] | missionsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: missionsCreateOrConnectWithoutUsersInput | missionsCreateOrConnectWithoutUsersInput[]
    upsert?: missionsUpsertWithWhereUniqueWithoutUsersInput | missionsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: missionsCreateManyUsersInputEnvelope
    set?: missionsWhereUniqueInput | missionsWhereUniqueInput[]
    disconnect?: missionsWhereUniqueInput | missionsWhereUniqueInput[]
    delete?: missionsWhereUniqueInput | missionsWhereUniqueInput[]
    connect?: missionsWhereUniqueInput | missionsWhereUniqueInput[]
    update?: missionsUpdateWithWhereUniqueWithoutUsersInput | missionsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: missionsUpdateManyWithWhereWithoutUsersInput | missionsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: missionsScalarWhereInput | missionsScalarWhereInput[]
  }

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type NestedUuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
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

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
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

  export type NestedUuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
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

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
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

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type missionsCreateWithoutCandidaturesInput = {
    id?: string
    title: string
    description?: string | null
    price?: Decimal | DecimalJsLike | number | string | null
    status?: string | null
    created_at?: Date | string | null
    users?: usersCreateNestedOneWithoutMissionsInput
  }

  export type missionsUncheckedCreateWithoutCandidaturesInput = {
    id?: string
    user_id?: string | null
    title: string
    description?: string | null
    price?: Decimal | DecimalJsLike | number | string | null
    status?: string | null
    created_at?: Date | string | null
  }

  export type missionsCreateOrConnectWithoutCandidaturesInput = {
    where: missionsWhereUniqueInput
    create: XOR<missionsCreateWithoutCandidaturesInput, missionsUncheckedCreateWithoutCandidaturesInput>
  }

  export type usersCreateWithoutCandidaturesInput = {
    id?: string
    email: string
    password: string
    name: string
    role: string
    created_at?: Date | string | null
    freelance_cvs?: freelance_cvsCreateNestedManyWithoutUsersInput
    missions?: missionsCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutCandidaturesInput = {
    id?: string
    email: string
    password: string
    name: string
    role: string
    created_at?: Date | string | null
    freelance_cvs?: freelance_cvsUncheckedCreateNestedManyWithoutUsersInput
    missions?: missionsUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutCandidaturesInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutCandidaturesInput, usersUncheckedCreateWithoutCandidaturesInput>
  }

  export type missionsUpsertWithoutCandidaturesInput = {
    update: XOR<missionsUpdateWithoutCandidaturesInput, missionsUncheckedUpdateWithoutCandidaturesInput>
    create: XOR<missionsCreateWithoutCandidaturesInput, missionsUncheckedCreateWithoutCandidaturesInput>
    where?: missionsWhereInput
  }

  export type missionsUpdateToOneWithWhereWithoutCandidaturesInput = {
    where?: missionsWhereInput
    data: XOR<missionsUpdateWithoutCandidaturesInput, missionsUncheckedUpdateWithoutCandidaturesInput>
  }

  export type missionsUpdateWithoutCandidaturesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: usersUpdateOneWithoutMissionsNestedInput
  }

  export type missionsUncheckedUpdateWithoutCandidaturesInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type usersUpsertWithoutCandidaturesInput = {
    update: XOR<usersUpdateWithoutCandidaturesInput, usersUncheckedUpdateWithoutCandidaturesInput>
    create: XOR<usersCreateWithoutCandidaturesInput, usersUncheckedCreateWithoutCandidaturesInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutCandidaturesInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutCandidaturesInput, usersUncheckedUpdateWithoutCandidaturesInput>
  }

  export type usersUpdateWithoutCandidaturesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    freelance_cvs?: freelance_cvsUpdateManyWithoutUsersNestedInput
    missions?: missionsUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutCandidaturesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    freelance_cvs?: freelance_cvsUncheckedUpdateManyWithoutUsersNestedInput
    missions?: missionsUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type usersCreateWithoutFreelance_cvsInput = {
    id?: string
    email: string
    password: string
    name: string
    role: string
    created_at?: Date | string | null
    candidatures?: candidaturesCreateNestedManyWithoutUsersInput
    missions?: missionsCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutFreelance_cvsInput = {
    id?: string
    email: string
    password: string
    name: string
    role: string
    created_at?: Date | string | null
    candidatures?: candidaturesUncheckedCreateNestedManyWithoutUsersInput
    missions?: missionsUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutFreelance_cvsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutFreelance_cvsInput, usersUncheckedCreateWithoutFreelance_cvsInput>
  }

  export type usersUpsertWithoutFreelance_cvsInput = {
    update: XOR<usersUpdateWithoutFreelance_cvsInput, usersUncheckedUpdateWithoutFreelance_cvsInput>
    create: XOR<usersCreateWithoutFreelance_cvsInput, usersUncheckedCreateWithoutFreelance_cvsInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutFreelance_cvsInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutFreelance_cvsInput, usersUncheckedUpdateWithoutFreelance_cvsInput>
  }

  export type usersUpdateWithoutFreelance_cvsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    candidatures?: candidaturesUpdateManyWithoutUsersNestedInput
    missions?: missionsUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutFreelance_cvsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    candidatures?: candidaturesUncheckedUpdateManyWithoutUsersNestedInput
    missions?: missionsUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type candidaturesCreateWithoutMissionsInput = {
    id?: string
    lettre_motivation?: string | null
    status?: string | null
    created_at?: Date | string | null
    users?: usersCreateNestedOneWithoutCandidaturesInput
  }

  export type candidaturesUncheckedCreateWithoutMissionsInput = {
    id?: string
    user_id?: string | null
    lettre_motivation?: string | null
    status?: string | null
    created_at?: Date | string | null
  }

  export type candidaturesCreateOrConnectWithoutMissionsInput = {
    where: candidaturesWhereUniqueInput
    create: XOR<candidaturesCreateWithoutMissionsInput, candidaturesUncheckedCreateWithoutMissionsInput>
  }

  export type candidaturesCreateManyMissionsInputEnvelope = {
    data: candidaturesCreateManyMissionsInput | candidaturesCreateManyMissionsInput[]
    skipDuplicates?: boolean
  }

  export type usersCreateWithoutMissionsInput = {
    id?: string
    email: string
    password: string
    name: string
    role: string
    created_at?: Date | string | null
    candidatures?: candidaturesCreateNestedManyWithoutUsersInput
    freelance_cvs?: freelance_cvsCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutMissionsInput = {
    id?: string
    email: string
    password: string
    name: string
    role: string
    created_at?: Date | string | null
    candidatures?: candidaturesUncheckedCreateNestedManyWithoutUsersInput
    freelance_cvs?: freelance_cvsUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutMissionsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutMissionsInput, usersUncheckedCreateWithoutMissionsInput>
  }

  export type candidaturesUpsertWithWhereUniqueWithoutMissionsInput = {
    where: candidaturesWhereUniqueInput
    update: XOR<candidaturesUpdateWithoutMissionsInput, candidaturesUncheckedUpdateWithoutMissionsInput>
    create: XOR<candidaturesCreateWithoutMissionsInput, candidaturesUncheckedCreateWithoutMissionsInput>
  }

  export type candidaturesUpdateWithWhereUniqueWithoutMissionsInput = {
    where: candidaturesWhereUniqueInput
    data: XOR<candidaturesUpdateWithoutMissionsInput, candidaturesUncheckedUpdateWithoutMissionsInput>
  }

  export type candidaturesUpdateManyWithWhereWithoutMissionsInput = {
    where: candidaturesScalarWhereInput
    data: XOR<candidaturesUpdateManyMutationInput, candidaturesUncheckedUpdateManyWithoutMissionsInput>
  }

  export type candidaturesScalarWhereInput = {
    AND?: candidaturesScalarWhereInput | candidaturesScalarWhereInput[]
    OR?: candidaturesScalarWhereInput[]
    NOT?: candidaturesScalarWhereInput | candidaturesScalarWhereInput[]
    id?: UuidFilter<"candidatures"> | string
    mission_id?: UuidNullableFilter<"candidatures"> | string | null
    user_id?: UuidNullableFilter<"candidatures"> | string | null
    lettre_motivation?: StringNullableFilter<"candidatures"> | string | null
    status?: StringNullableFilter<"candidatures"> | string | null
    created_at?: DateTimeNullableFilter<"candidatures"> | Date | string | null
  }

  export type usersUpsertWithoutMissionsInput = {
    update: XOR<usersUpdateWithoutMissionsInput, usersUncheckedUpdateWithoutMissionsInput>
    create: XOR<usersCreateWithoutMissionsInput, usersUncheckedCreateWithoutMissionsInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutMissionsInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutMissionsInput, usersUncheckedUpdateWithoutMissionsInput>
  }

  export type usersUpdateWithoutMissionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    candidatures?: candidaturesUpdateManyWithoutUsersNestedInput
    freelance_cvs?: freelance_cvsUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutMissionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    candidatures?: candidaturesUncheckedUpdateManyWithoutUsersNestedInput
    freelance_cvs?: freelance_cvsUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type candidaturesCreateWithoutUsersInput = {
    id?: string
    lettre_motivation?: string | null
    status?: string | null
    created_at?: Date | string | null
    missions?: missionsCreateNestedOneWithoutCandidaturesInput
  }

  export type candidaturesUncheckedCreateWithoutUsersInput = {
    id?: string
    mission_id?: string | null
    lettre_motivation?: string | null
    status?: string | null
    created_at?: Date | string | null
  }

  export type candidaturesCreateOrConnectWithoutUsersInput = {
    where: candidaturesWhereUniqueInput
    create: XOR<candidaturesCreateWithoutUsersInput, candidaturesUncheckedCreateWithoutUsersInput>
  }

  export type candidaturesCreateManyUsersInputEnvelope = {
    data: candidaturesCreateManyUsersInput | candidaturesCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type freelance_cvsCreateWithoutUsersInput = {
    id?: string
    bio?: string | null
    skills?: freelance_cvsCreateskillsInput | string[]
    portfolio_url?: string | null
    cv_url?: string | null
    created_at?: Date | string | null
  }

  export type freelance_cvsUncheckedCreateWithoutUsersInput = {
    id?: string
    bio?: string | null
    skills?: freelance_cvsCreateskillsInput | string[]
    portfolio_url?: string | null
    cv_url?: string | null
    created_at?: Date | string | null
  }

  export type freelance_cvsCreateOrConnectWithoutUsersInput = {
    where: freelance_cvsWhereUniqueInput
    create: XOR<freelance_cvsCreateWithoutUsersInput, freelance_cvsUncheckedCreateWithoutUsersInput>
  }

  export type freelance_cvsCreateManyUsersInputEnvelope = {
    data: freelance_cvsCreateManyUsersInput | freelance_cvsCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type missionsCreateWithoutUsersInput = {
    id?: string
    title: string
    description?: string | null
    price?: Decimal | DecimalJsLike | number | string | null
    status?: string | null
    created_at?: Date | string | null
    candidatures?: candidaturesCreateNestedManyWithoutMissionsInput
  }

  export type missionsUncheckedCreateWithoutUsersInput = {
    id?: string
    title: string
    description?: string | null
    price?: Decimal | DecimalJsLike | number | string | null
    status?: string | null
    created_at?: Date | string | null
    candidatures?: candidaturesUncheckedCreateNestedManyWithoutMissionsInput
  }

  export type missionsCreateOrConnectWithoutUsersInput = {
    where: missionsWhereUniqueInput
    create: XOR<missionsCreateWithoutUsersInput, missionsUncheckedCreateWithoutUsersInput>
  }

  export type missionsCreateManyUsersInputEnvelope = {
    data: missionsCreateManyUsersInput | missionsCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type candidaturesUpsertWithWhereUniqueWithoutUsersInput = {
    where: candidaturesWhereUniqueInput
    update: XOR<candidaturesUpdateWithoutUsersInput, candidaturesUncheckedUpdateWithoutUsersInput>
    create: XOR<candidaturesCreateWithoutUsersInput, candidaturesUncheckedCreateWithoutUsersInput>
  }

  export type candidaturesUpdateWithWhereUniqueWithoutUsersInput = {
    where: candidaturesWhereUniqueInput
    data: XOR<candidaturesUpdateWithoutUsersInput, candidaturesUncheckedUpdateWithoutUsersInput>
  }

  export type candidaturesUpdateManyWithWhereWithoutUsersInput = {
    where: candidaturesScalarWhereInput
    data: XOR<candidaturesUpdateManyMutationInput, candidaturesUncheckedUpdateManyWithoutUsersInput>
  }

  export type freelance_cvsUpsertWithWhereUniqueWithoutUsersInput = {
    where: freelance_cvsWhereUniqueInput
    update: XOR<freelance_cvsUpdateWithoutUsersInput, freelance_cvsUncheckedUpdateWithoutUsersInput>
    create: XOR<freelance_cvsCreateWithoutUsersInput, freelance_cvsUncheckedCreateWithoutUsersInput>
  }

  export type freelance_cvsUpdateWithWhereUniqueWithoutUsersInput = {
    where: freelance_cvsWhereUniqueInput
    data: XOR<freelance_cvsUpdateWithoutUsersInput, freelance_cvsUncheckedUpdateWithoutUsersInput>
  }

  export type freelance_cvsUpdateManyWithWhereWithoutUsersInput = {
    where: freelance_cvsScalarWhereInput
    data: XOR<freelance_cvsUpdateManyMutationInput, freelance_cvsUncheckedUpdateManyWithoutUsersInput>
  }

  export type freelance_cvsScalarWhereInput = {
    AND?: freelance_cvsScalarWhereInput | freelance_cvsScalarWhereInput[]
    OR?: freelance_cvsScalarWhereInput[]
    NOT?: freelance_cvsScalarWhereInput | freelance_cvsScalarWhereInput[]
    id?: UuidFilter<"freelance_cvs"> | string
    user_id?: UuidNullableFilter<"freelance_cvs"> | string | null
    bio?: StringNullableFilter<"freelance_cvs"> | string | null
    skills?: StringNullableListFilter<"freelance_cvs">
    portfolio_url?: StringNullableFilter<"freelance_cvs"> | string | null
    cv_url?: StringNullableFilter<"freelance_cvs"> | string | null
    created_at?: DateTimeNullableFilter<"freelance_cvs"> | Date | string | null
  }

  export type missionsUpsertWithWhereUniqueWithoutUsersInput = {
    where: missionsWhereUniqueInput
    update: XOR<missionsUpdateWithoutUsersInput, missionsUncheckedUpdateWithoutUsersInput>
    create: XOR<missionsCreateWithoutUsersInput, missionsUncheckedCreateWithoutUsersInput>
  }

  export type missionsUpdateWithWhereUniqueWithoutUsersInput = {
    where: missionsWhereUniqueInput
    data: XOR<missionsUpdateWithoutUsersInput, missionsUncheckedUpdateWithoutUsersInput>
  }

  export type missionsUpdateManyWithWhereWithoutUsersInput = {
    where: missionsScalarWhereInput
    data: XOR<missionsUpdateManyMutationInput, missionsUncheckedUpdateManyWithoutUsersInput>
  }

  export type missionsScalarWhereInput = {
    AND?: missionsScalarWhereInput | missionsScalarWhereInput[]
    OR?: missionsScalarWhereInput[]
    NOT?: missionsScalarWhereInput | missionsScalarWhereInput[]
    id?: UuidFilter<"missions"> | string
    user_id?: UuidNullableFilter<"missions"> | string | null
    title?: StringFilter<"missions"> | string
    description?: StringNullableFilter<"missions"> | string | null
    price?: DecimalNullableFilter<"missions"> | Decimal | DecimalJsLike | number | string | null
    status?: StringNullableFilter<"missions"> | string | null
    created_at?: DateTimeNullableFilter<"missions"> | Date | string | null
  }

  export type candidaturesCreateManyMissionsInput = {
    id?: string
    user_id?: string | null
    lettre_motivation?: string | null
    status?: string | null
    created_at?: Date | string | null
  }

  export type candidaturesUpdateWithoutMissionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    lettre_motivation?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: usersUpdateOneWithoutCandidaturesNestedInput
  }

  export type candidaturesUncheckedUpdateWithoutMissionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    lettre_motivation?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type candidaturesUncheckedUpdateManyWithoutMissionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    lettre_motivation?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type candidaturesCreateManyUsersInput = {
    id?: string
    mission_id?: string | null
    lettre_motivation?: string | null
    status?: string | null
    created_at?: Date | string | null
  }

  export type freelance_cvsCreateManyUsersInput = {
    id?: string
    bio?: string | null
    skills?: freelance_cvsCreateskillsInput | string[]
    portfolio_url?: string | null
    cv_url?: string | null
    created_at?: Date | string | null
  }

  export type missionsCreateManyUsersInput = {
    id?: string
    title: string
    description?: string | null
    price?: Decimal | DecimalJsLike | number | string | null
    status?: string | null
    created_at?: Date | string | null
  }

  export type candidaturesUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    lettre_motivation?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    missions?: missionsUpdateOneWithoutCandidaturesNestedInput
  }

  export type candidaturesUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    mission_id?: NullableStringFieldUpdateOperationsInput | string | null
    lettre_motivation?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type candidaturesUncheckedUpdateManyWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    mission_id?: NullableStringFieldUpdateOperationsInput | string | null
    lettre_motivation?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type freelance_cvsUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    skills?: freelance_cvsUpdateskillsInput | string[]
    portfolio_url?: NullableStringFieldUpdateOperationsInput | string | null
    cv_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type freelance_cvsUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    skills?: freelance_cvsUpdateskillsInput | string[]
    portfolio_url?: NullableStringFieldUpdateOperationsInput | string | null
    cv_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type freelance_cvsUncheckedUpdateManyWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    skills?: freelance_cvsUpdateskillsInput | string[]
    portfolio_url?: NullableStringFieldUpdateOperationsInput | string | null
    cv_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type missionsUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    candidatures?: candidaturesUpdateManyWithoutMissionsNestedInput
  }

  export type missionsUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    candidatures?: candidaturesUncheckedUpdateManyWithoutMissionsNestedInput
  }

  export type missionsUncheckedUpdateManyWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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