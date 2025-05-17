
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
 * Model KudosBoard
 * 
 */
export type KudosBoard = $Result.DefaultSelection<Prisma.$KudosBoardPayload>
/**
 * Model KudosMessage
 * 
 */
export type KudosMessage = $Result.DefaultSelection<Prisma.$KudosMessagePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more KudosBoards
 * const kudosBoards = await prisma.kudosBoard.findMany()
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
   * // Fetch zero or more KudosBoards
   * const kudosBoards = await prisma.kudosBoard.findMany()
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
   * `prisma.kudosBoard`: Exposes CRUD operations for the **KudosBoard** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more KudosBoards
    * const kudosBoards = await prisma.kudosBoard.findMany()
    * ```
    */
  get kudosBoard(): Prisma.KudosBoardDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.kudosMessage`: Exposes CRUD operations for the **KudosMessage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more KudosMessages
    * const kudosMessages = await prisma.kudosMessage.findMany()
    * ```
    */
  get kudosMessage(): Prisma.KudosMessageDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
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
    KudosBoard: 'KudosBoard',
    KudosMessage: 'KudosMessage'
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
      modelProps: "kudosBoard" | "kudosMessage"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      KudosBoard: {
        payload: Prisma.$KudosBoardPayload<ExtArgs>
        fields: Prisma.KudosBoardFieldRefs
        operations: {
          findUnique: {
            args: Prisma.KudosBoardFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KudosBoardPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.KudosBoardFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KudosBoardPayload>
          }
          findFirst: {
            args: Prisma.KudosBoardFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KudosBoardPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.KudosBoardFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KudosBoardPayload>
          }
          findMany: {
            args: Prisma.KudosBoardFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KudosBoardPayload>[]
          }
          create: {
            args: Prisma.KudosBoardCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KudosBoardPayload>
          }
          createMany: {
            args: Prisma.KudosBoardCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.KudosBoardCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KudosBoardPayload>[]
          }
          delete: {
            args: Prisma.KudosBoardDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KudosBoardPayload>
          }
          update: {
            args: Prisma.KudosBoardUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KudosBoardPayload>
          }
          deleteMany: {
            args: Prisma.KudosBoardDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.KudosBoardUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.KudosBoardUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KudosBoardPayload>[]
          }
          upsert: {
            args: Prisma.KudosBoardUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KudosBoardPayload>
          }
          aggregate: {
            args: Prisma.KudosBoardAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateKudosBoard>
          }
          groupBy: {
            args: Prisma.KudosBoardGroupByArgs<ExtArgs>
            result: $Utils.Optional<KudosBoardGroupByOutputType>[]
          }
          count: {
            args: Prisma.KudosBoardCountArgs<ExtArgs>
            result: $Utils.Optional<KudosBoardCountAggregateOutputType> | number
          }
        }
      }
      KudosMessage: {
        payload: Prisma.$KudosMessagePayload<ExtArgs>
        fields: Prisma.KudosMessageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.KudosMessageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KudosMessagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.KudosMessageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KudosMessagePayload>
          }
          findFirst: {
            args: Prisma.KudosMessageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KudosMessagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.KudosMessageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KudosMessagePayload>
          }
          findMany: {
            args: Prisma.KudosMessageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KudosMessagePayload>[]
          }
          create: {
            args: Prisma.KudosMessageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KudosMessagePayload>
          }
          createMany: {
            args: Prisma.KudosMessageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.KudosMessageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KudosMessagePayload>[]
          }
          delete: {
            args: Prisma.KudosMessageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KudosMessagePayload>
          }
          update: {
            args: Prisma.KudosMessageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KudosMessagePayload>
          }
          deleteMany: {
            args: Prisma.KudosMessageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.KudosMessageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.KudosMessageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KudosMessagePayload>[]
          }
          upsert: {
            args: Prisma.KudosMessageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KudosMessagePayload>
          }
          aggregate: {
            args: Prisma.KudosMessageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateKudosMessage>
          }
          groupBy: {
            args: Prisma.KudosMessageGroupByArgs<ExtArgs>
            result: $Utils.Optional<KudosMessageGroupByOutputType>[]
          }
          count: {
            args: Prisma.KudosMessageCountArgs<ExtArgs>
            result: $Utils.Optional<KudosMessageCountAggregateOutputType> | number
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
    kudosBoard?: KudosBoardOmit
    kudosMessage?: KudosMessageOmit
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
   * Count Type KudosBoardCountOutputType
   */

  export type KudosBoardCountOutputType = {
    messages: number
  }

  export type KudosBoardCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    messages?: boolean | KudosBoardCountOutputTypeCountMessagesArgs
  }

  // Custom InputTypes
  /**
   * KudosBoardCountOutputType without action
   */
  export type KudosBoardCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KudosBoardCountOutputType
     */
    select?: KudosBoardCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * KudosBoardCountOutputType without action
   */
  export type KudosBoardCountOutputTypeCountMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: KudosMessageWhereInput
  }


  /**
   * Models
   */

  /**
   * Model KudosBoard
   */

  export type AggregateKudosBoard = {
    _count: KudosBoardCountAggregateOutputType | null
    _avg: KudosBoardAvgAggregateOutputType | null
    _sum: KudosBoardSumAggregateOutputType | null
    _min: KudosBoardMinAggregateOutputType | null
    _max: KudosBoardMaxAggregateOutputType | null
  }

  export type KudosBoardAvgAggregateOutputType = {
    id: number | null
  }

  export type KudosBoardSumAggregateOutputType = {
    id: number | null
  }

  export type KudosBoardMinAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    category: string | null
    image: string | null
    author: string | null
    createdAt: Date | null
  }

  export type KudosBoardMaxAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    category: string | null
    image: string | null
    author: string | null
    createdAt: Date | null
  }

  export type KudosBoardCountAggregateOutputType = {
    id: number
    title: number
    description: number
    category: number
    image: number
    author: number
    createdAt: number
    _all: number
  }


  export type KudosBoardAvgAggregateInputType = {
    id?: true
  }

  export type KudosBoardSumAggregateInputType = {
    id?: true
  }

  export type KudosBoardMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    category?: true
    image?: true
    author?: true
    createdAt?: true
  }

  export type KudosBoardMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    category?: true
    image?: true
    author?: true
    createdAt?: true
  }

  export type KudosBoardCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    category?: true
    image?: true
    author?: true
    createdAt?: true
    _all?: true
  }

  export type KudosBoardAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which KudosBoard to aggregate.
     */
    where?: KudosBoardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of KudosBoards to fetch.
     */
    orderBy?: KudosBoardOrderByWithRelationInput | KudosBoardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: KudosBoardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` KudosBoards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` KudosBoards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned KudosBoards
    **/
    _count?: true | KudosBoardCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: KudosBoardAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: KudosBoardSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: KudosBoardMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: KudosBoardMaxAggregateInputType
  }

  export type GetKudosBoardAggregateType<T extends KudosBoardAggregateArgs> = {
        [P in keyof T & keyof AggregateKudosBoard]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateKudosBoard[P]>
      : GetScalarType<T[P], AggregateKudosBoard[P]>
  }




  export type KudosBoardGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: KudosBoardWhereInput
    orderBy?: KudosBoardOrderByWithAggregationInput | KudosBoardOrderByWithAggregationInput[]
    by: KudosBoardScalarFieldEnum[] | KudosBoardScalarFieldEnum
    having?: KudosBoardScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: KudosBoardCountAggregateInputType | true
    _avg?: KudosBoardAvgAggregateInputType
    _sum?: KudosBoardSumAggregateInputType
    _min?: KudosBoardMinAggregateInputType
    _max?: KudosBoardMaxAggregateInputType
  }

  export type KudosBoardGroupByOutputType = {
    id: number
    title: string
    description: string
    category: string
    image: string
    author: string | null
    createdAt: Date
    _count: KudosBoardCountAggregateOutputType | null
    _avg: KudosBoardAvgAggregateOutputType | null
    _sum: KudosBoardSumAggregateOutputType | null
    _min: KudosBoardMinAggregateOutputType | null
    _max: KudosBoardMaxAggregateOutputType | null
  }

  type GetKudosBoardGroupByPayload<T extends KudosBoardGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<KudosBoardGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof KudosBoardGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], KudosBoardGroupByOutputType[P]>
            : GetScalarType<T[P], KudosBoardGroupByOutputType[P]>
        }
      >
    >


  export type KudosBoardSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    category?: boolean
    image?: boolean
    author?: boolean
    createdAt?: boolean
    messages?: boolean | KudosBoard$messagesArgs<ExtArgs>
    _count?: boolean | KudosBoardCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["kudosBoard"]>

  export type KudosBoardSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    category?: boolean
    image?: boolean
    author?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["kudosBoard"]>

  export type KudosBoardSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    category?: boolean
    image?: boolean
    author?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["kudosBoard"]>

  export type KudosBoardSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    category?: boolean
    image?: boolean
    author?: boolean
    createdAt?: boolean
  }

  export type KudosBoardOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "category" | "image" | "author" | "createdAt", ExtArgs["result"]["kudosBoard"]>
  export type KudosBoardInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    messages?: boolean | KudosBoard$messagesArgs<ExtArgs>
    _count?: boolean | KudosBoardCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type KudosBoardIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type KudosBoardIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $KudosBoardPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "KudosBoard"
    objects: {
      messages: Prisma.$KudosMessagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      description: string
      category: string
      image: string
      author: string | null
      createdAt: Date
    }, ExtArgs["result"]["kudosBoard"]>
    composites: {}
  }

  type KudosBoardGetPayload<S extends boolean | null | undefined | KudosBoardDefaultArgs> = $Result.GetResult<Prisma.$KudosBoardPayload, S>

  type KudosBoardCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<KudosBoardFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: KudosBoardCountAggregateInputType | true
    }

  export interface KudosBoardDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['KudosBoard'], meta: { name: 'KudosBoard' } }
    /**
     * Find zero or one KudosBoard that matches the filter.
     * @param {KudosBoardFindUniqueArgs} args - Arguments to find a KudosBoard
     * @example
     * // Get one KudosBoard
     * const kudosBoard = await prisma.kudosBoard.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends KudosBoardFindUniqueArgs>(args: SelectSubset<T, KudosBoardFindUniqueArgs<ExtArgs>>): Prisma__KudosBoardClient<$Result.GetResult<Prisma.$KudosBoardPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one KudosBoard that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {KudosBoardFindUniqueOrThrowArgs} args - Arguments to find a KudosBoard
     * @example
     * // Get one KudosBoard
     * const kudosBoard = await prisma.kudosBoard.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends KudosBoardFindUniqueOrThrowArgs>(args: SelectSubset<T, KudosBoardFindUniqueOrThrowArgs<ExtArgs>>): Prisma__KudosBoardClient<$Result.GetResult<Prisma.$KudosBoardPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first KudosBoard that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KudosBoardFindFirstArgs} args - Arguments to find a KudosBoard
     * @example
     * // Get one KudosBoard
     * const kudosBoard = await prisma.kudosBoard.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends KudosBoardFindFirstArgs>(args?: SelectSubset<T, KudosBoardFindFirstArgs<ExtArgs>>): Prisma__KudosBoardClient<$Result.GetResult<Prisma.$KudosBoardPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first KudosBoard that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KudosBoardFindFirstOrThrowArgs} args - Arguments to find a KudosBoard
     * @example
     * // Get one KudosBoard
     * const kudosBoard = await prisma.kudosBoard.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends KudosBoardFindFirstOrThrowArgs>(args?: SelectSubset<T, KudosBoardFindFirstOrThrowArgs<ExtArgs>>): Prisma__KudosBoardClient<$Result.GetResult<Prisma.$KudosBoardPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more KudosBoards that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KudosBoardFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all KudosBoards
     * const kudosBoards = await prisma.kudosBoard.findMany()
     * 
     * // Get first 10 KudosBoards
     * const kudosBoards = await prisma.kudosBoard.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const kudosBoardWithIdOnly = await prisma.kudosBoard.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends KudosBoardFindManyArgs>(args?: SelectSubset<T, KudosBoardFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KudosBoardPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a KudosBoard.
     * @param {KudosBoardCreateArgs} args - Arguments to create a KudosBoard.
     * @example
     * // Create one KudosBoard
     * const KudosBoard = await prisma.kudosBoard.create({
     *   data: {
     *     // ... data to create a KudosBoard
     *   }
     * })
     * 
     */
    create<T extends KudosBoardCreateArgs>(args: SelectSubset<T, KudosBoardCreateArgs<ExtArgs>>): Prisma__KudosBoardClient<$Result.GetResult<Prisma.$KudosBoardPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many KudosBoards.
     * @param {KudosBoardCreateManyArgs} args - Arguments to create many KudosBoards.
     * @example
     * // Create many KudosBoards
     * const kudosBoard = await prisma.kudosBoard.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends KudosBoardCreateManyArgs>(args?: SelectSubset<T, KudosBoardCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many KudosBoards and returns the data saved in the database.
     * @param {KudosBoardCreateManyAndReturnArgs} args - Arguments to create many KudosBoards.
     * @example
     * // Create many KudosBoards
     * const kudosBoard = await prisma.kudosBoard.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many KudosBoards and only return the `id`
     * const kudosBoardWithIdOnly = await prisma.kudosBoard.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends KudosBoardCreateManyAndReturnArgs>(args?: SelectSubset<T, KudosBoardCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KudosBoardPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a KudosBoard.
     * @param {KudosBoardDeleteArgs} args - Arguments to delete one KudosBoard.
     * @example
     * // Delete one KudosBoard
     * const KudosBoard = await prisma.kudosBoard.delete({
     *   where: {
     *     // ... filter to delete one KudosBoard
     *   }
     * })
     * 
     */
    delete<T extends KudosBoardDeleteArgs>(args: SelectSubset<T, KudosBoardDeleteArgs<ExtArgs>>): Prisma__KudosBoardClient<$Result.GetResult<Prisma.$KudosBoardPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one KudosBoard.
     * @param {KudosBoardUpdateArgs} args - Arguments to update one KudosBoard.
     * @example
     * // Update one KudosBoard
     * const kudosBoard = await prisma.kudosBoard.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends KudosBoardUpdateArgs>(args: SelectSubset<T, KudosBoardUpdateArgs<ExtArgs>>): Prisma__KudosBoardClient<$Result.GetResult<Prisma.$KudosBoardPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more KudosBoards.
     * @param {KudosBoardDeleteManyArgs} args - Arguments to filter KudosBoards to delete.
     * @example
     * // Delete a few KudosBoards
     * const { count } = await prisma.kudosBoard.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends KudosBoardDeleteManyArgs>(args?: SelectSubset<T, KudosBoardDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more KudosBoards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KudosBoardUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many KudosBoards
     * const kudosBoard = await prisma.kudosBoard.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends KudosBoardUpdateManyArgs>(args: SelectSubset<T, KudosBoardUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more KudosBoards and returns the data updated in the database.
     * @param {KudosBoardUpdateManyAndReturnArgs} args - Arguments to update many KudosBoards.
     * @example
     * // Update many KudosBoards
     * const kudosBoard = await prisma.kudosBoard.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more KudosBoards and only return the `id`
     * const kudosBoardWithIdOnly = await prisma.kudosBoard.updateManyAndReturn({
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
    updateManyAndReturn<T extends KudosBoardUpdateManyAndReturnArgs>(args: SelectSubset<T, KudosBoardUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KudosBoardPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one KudosBoard.
     * @param {KudosBoardUpsertArgs} args - Arguments to update or create a KudosBoard.
     * @example
     * // Update or create a KudosBoard
     * const kudosBoard = await prisma.kudosBoard.upsert({
     *   create: {
     *     // ... data to create a KudosBoard
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the KudosBoard we want to update
     *   }
     * })
     */
    upsert<T extends KudosBoardUpsertArgs>(args: SelectSubset<T, KudosBoardUpsertArgs<ExtArgs>>): Prisma__KudosBoardClient<$Result.GetResult<Prisma.$KudosBoardPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of KudosBoards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KudosBoardCountArgs} args - Arguments to filter KudosBoards to count.
     * @example
     * // Count the number of KudosBoards
     * const count = await prisma.kudosBoard.count({
     *   where: {
     *     // ... the filter for the KudosBoards we want to count
     *   }
     * })
    **/
    count<T extends KudosBoardCountArgs>(
      args?: Subset<T, KudosBoardCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], KudosBoardCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a KudosBoard.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KudosBoardAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends KudosBoardAggregateArgs>(args: Subset<T, KudosBoardAggregateArgs>): Prisma.PrismaPromise<GetKudosBoardAggregateType<T>>

    /**
     * Group by KudosBoard.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KudosBoardGroupByArgs} args - Group by arguments.
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
      T extends KudosBoardGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: KudosBoardGroupByArgs['orderBy'] }
        : { orderBy?: KudosBoardGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, KudosBoardGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetKudosBoardGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the KudosBoard model
   */
  readonly fields: KudosBoardFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for KudosBoard.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__KudosBoardClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    messages<T extends KudosBoard$messagesArgs<ExtArgs> = {}>(args?: Subset<T, KudosBoard$messagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KudosMessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the KudosBoard model
   */
  interface KudosBoardFieldRefs {
    readonly id: FieldRef<"KudosBoard", 'Int'>
    readonly title: FieldRef<"KudosBoard", 'String'>
    readonly description: FieldRef<"KudosBoard", 'String'>
    readonly category: FieldRef<"KudosBoard", 'String'>
    readonly image: FieldRef<"KudosBoard", 'String'>
    readonly author: FieldRef<"KudosBoard", 'String'>
    readonly createdAt: FieldRef<"KudosBoard", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * KudosBoard findUnique
   */
  export type KudosBoardFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KudosBoard
     */
    select?: KudosBoardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KudosBoard
     */
    omit?: KudosBoardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KudosBoardInclude<ExtArgs> | null
    /**
     * Filter, which KudosBoard to fetch.
     */
    where: KudosBoardWhereUniqueInput
  }

  /**
   * KudosBoard findUniqueOrThrow
   */
  export type KudosBoardFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KudosBoard
     */
    select?: KudosBoardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KudosBoard
     */
    omit?: KudosBoardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KudosBoardInclude<ExtArgs> | null
    /**
     * Filter, which KudosBoard to fetch.
     */
    where: KudosBoardWhereUniqueInput
  }

  /**
   * KudosBoard findFirst
   */
  export type KudosBoardFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KudosBoard
     */
    select?: KudosBoardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KudosBoard
     */
    omit?: KudosBoardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KudosBoardInclude<ExtArgs> | null
    /**
     * Filter, which KudosBoard to fetch.
     */
    where?: KudosBoardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of KudosBoards to fetch.
     */
    orderBy?: KudosBoardOrderByWithRelationInput | KudosBoardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for KudosBoards.
     */
    cursor?: KudosBoardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` KudosBoards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` KudosBoards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of KudosBoards.
     */
    distinct?: KudosBoardScalarFieldEnum | KudosBoardScalarFieldEnum[]
  }

  /**
   * KudosBoard findFirstOrThrow
   */
  export type KudosBoardFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KudosBoard
     */
    select?: KudosBoardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KudosBoard
     */
    omit?: KudosBoardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KudosBoardInclude<ExtArgs> | null
    /**
     * Filter, which KudosBoard to fetch.
     */
    where?: KudosBoardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of KudosBoards to fetch.
     */
    orderBy?: KudosBoardOrderByWithRelationInput | KudosBoardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for KudosBoards.
     */
    cursor?: KudosBoardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` KudosBoards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` KudosBoards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of KudosBoards.
     */
    distinct?: KudosBoardScalarFieldEnum | KudosBoardScalarFieldEnum[]
  }

  /**
   * KudosBoard findMany
   */
  export type KudosBoardFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KudosBoard
     */
    select?: KudosBoardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KudosBoard
     */
    omit?: KudosBoardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KudosBoardInclude<ExtArgs> | null
    /**
     * Filter, which KudosBoards to fetch.
     */
    where?: KudosBoardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of KudosBoards to fetch.
     */
    orderBy?: KudosBoardOrderByWithRelationInput | KudosBoardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing KudosBoards.
     */
    cursor?: KudosBoardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` KudosBoards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` KudosBoards.
     */
    skip?: number
    distinct?: KudosBoardScalarFieldEnum | KudosBoardScalarFieldEnum[]
  }

  /**
   * KudosBoard create
   */
  export type KudosBoardCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KudosBoard
     */
    select?: KudosBoardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KudosBoard
     */
    omit?: KudosBoardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KudosBoardInclude<ExtArgs> | null
    /**
     * The data needed to create a KudosBoard.
     */
    data: XOR<KudosBoardCreateInput, KudosBoardUncheckedCreateInput>
  }

  /**
   * KudosBoard createMany
   */
  export type KudosBoardCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many KudosBoards.
     */
    data: KudosBoardCreateManyInput | KudosBoardCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * KudosBoard createManyAndReturn
   */
  export type KudosBoardCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KudosBoard
     */
    select?: KudosBoardSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the KudosBoard
     */
    omit?: KudosBoardOmit<ExtArgs> | null
    /**
     * The data used to create many KudosBoards.
     */
    data: KudosBoardCreateManyInput | KudosBoardCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * KudosBoard update
   */
  export type KudosBoardUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KudosBoard
     */
    select?: KudosBoardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KudosBoard
     */
    omit?: KudosBoardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KudosBoardInclude<ExtArgs> | null
    /**
     * The data needed to update a KudosBoard.
     */
    data: XOR<KudosBoardUpdateInput, KudosBoardUncheckedUpdateInput>
    /**
     * Choose, which KudosBoard to update.
     */
    where: KudosBoardWhereUniqueInput
  }

  /**
   * KudosBoard updateMany
   */
  export type KudosBoardUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update KudosBoards.
     */
    data: XOR<KudosBoardUpdateManyMutationInput, KudosBoardUncheckedUpdateManyInput>
    /**
     * Filter which KudosBoards to update
     */
    where?: KudosBoardWhereInput
    /**
     * Limit how many KudosBoards to update.
     */
    limit?: number
  }

  /**
   * KudosBoard updateManyAndReturn
   */
  export type KudosBoardUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KudosBoard
     */
    select?: KudosBoardSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the KudosBoard
     */
    omit?: KudosBoardOmit<ExtArgs> | null
    /**
     * The data used to update KudosBoards.
     */
    data: XOR<KudosBoardUpdateManyMutationInput, KudosBoardUncheckedUpdateManyInput>
    /**
     * Filter which KudosBoards to update
     */
    where?: KudosBoardWhereInput
    /**
     * Limit how many KudosBoards to update.
     */
    limit?: number
  }

  /**
   * KudosBoard upsert
   */
  export type KudosBoardUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KudosBoard
     */
    select?: KudosBoardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KudosBoard
     */
    omit?: KudosBoardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KudosBoardInclude<ExtArgs> | null
    /**
     * The filter to search for the KudosBoard to update in case it exists.
     */
    where: KudosBoardWhereUniqueInput
    /**
     * In case the KudosBoard found by the `where` argument doesn't exist, create a new KudosBoard with this data.
     */
    create: XOR<KudosBoardCreateInput, KudosBoardUncheckedCreateInput>
    /**
     * In case the KudosBoard was found with the provided `where` argument, update it with this data.
     */
    update: XOR<KudosBoardUpdateInput, KudosBoardUncheckedUpdateInput>
  }

  /**
   * KudosBoard delete
   */
  export type KudosBoardDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KudosBoard
     */
    select?: KudosBoardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KudosBoard
     */
    omit?: KudosBoardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KudosBoardInclude<ExtArgs> | null
    /**
     * Filter which KudosBoard to delete.
     */
    where: KudosBoardWhereUniqueInput
  }

  /**
   * KudosBoard deleteMany
   */
  export type KudosBoardDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which KudosBoards to delete
     */
    where?: KudosBoardWhereInput
    /**
     * Limit how many KudosBoards to delete.
     */
    limit?: number
  }

  /**
   * KudosBoard.messages
   */
  export type KudosBoard$messagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KudosMessage
     */
    select?: KudosMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KudosMessage
     */
    omit?: KudosMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KudosMessageInclude<ExtArgs> | null
    where?: KudosMessageWhereInput
    orderBy?: KudosMessageOrderByWithRelationInput | KudosMessageOrderByWithRelationInput[]
    cursor?: KudosMessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: KudosMessageScalarFieldEnum | KudosMessageScalarFieldEnum[]
  }

  /**
   * KudosBoard without action
   */
  export type KudosBoardDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KudosBoard
     */
    select?: KudosBoardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KudosBoard
     */
    omit?: KudosBoardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KudosBoardInclude<ExtArgs> | null
  }


  /**
   * Model KudosMessage
   */

  export type AggregateKudosMessage = {
    _count: KudosMessageCountAggregateOutputType | null
    _avg: KudosMessageAvgAggregateOutputType | null
    _sum: KudosMessageSumAggregateOutputType | null
    _min: KudosMessageMinAggregateOutputType | null
    _max: KudosMessageMaxAggregateOutputType | null
  }

  export type KudosMessageAvgAggregateOutputType = {
    id: number | null
    upvotes: number | null
    boardId: number | null
  }

  export type KudosMessageSumAggregateOutputType = {
    id: number | null
    upvotes: number | null
    boardId: number | null
  }

  export type KudosMessageMinAggregateOutputType = {
    id: number | null
    title: string | null
    message: string | null
    image: string | null
    upvotes: number | null
    createdAt: Date | null
    boardId: number | null
  }

  export type KudosMessageMaxAggregateOutputType = {
    id: number | null
    title: string | null
    message: string | null
    image: string | null
    upvotes: number | null
    createdAt: Date | null
    boardId: number | null
  }

  export type KudosMessageCountAggregateOutputType = {
    id: number
    title: number
    message: number
    image: number
    upvotes: number
    createdAt: number
    boardId: number
    _all: number
  }


  export type KudosMessageAvgAggregateInputType = {
    id?: true
    upvotes?: true
    boardId?: true
  }

  export type KudosMessageSumAggregateInputType = {
    id?: true
    upvotes?: true
    boardId?: true
  }

  export type KudosMessageMinAggregateInputType = {
    id?: true
    title?: true
    message?: true
    image?: true
    upvotes?: true
    createdAt?: true
    boardId?: true
  }

  export type KudosMessageMaxAggregateInputType = {
    id?: true
    title?: true
    message?: true
    image?: true
    upvotes?: true
    createdAt?: true
    boardId?: true
  }

  export type KudosMessageCountAggregateInputType = {
    id?: true
    title?: true
    message?: true
    image?: true
    upvotes?: true
    createdAt?: true
    boardId?: true
    _all?: true
  }

  export type KudosMessageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which KudosMessage to aggregate.
     */
    where?: KudosMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of KudosMessages to fetch.
     */
    orderBy?: KudosMessageOrderByWithRelationInput | KudosMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: KudosMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` KudosMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` KudosMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned KudosMessages
    **/
    _count?: true | KudosMessageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: KudosMessageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: KudosMessageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: KudosMessageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: KudosMessageMaxAggregateInputType
  }

  export type GetKudosMessageAggregateType<T extends KudosMessageAggregateArgs> = {
        [P in keyof T & keyof AggregateKudosMessage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateKudosMessage[P]>
      : GetScalarType<T[P], AggregateKudosMessage[P]>
  }




  export type KudosMessageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: KudosMessageWhereInput
    orderBy?: KudosMessageOrderByWithAggregationInput | KudosMessageOrderByWithAggregationInput[]
    by: KudosMessageScalarFieldEnum[] | KudosMessageScalarFieldEnum
    having?: KudosMessageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: KudosMessageCountAggregateInputType | true
    _avg?: KudosMessageAvgAggregateInputType
    _sum?: KudosMessageSumAggregateInputType
    _min?: KudosMessageMinAggregateInputType
    _max?: KudosMessageMaxAggregateInputType
  }

  export type KudosMessageGroupByOutputType = {
    id: number
    title: string
    message: string
    image: string
    upvotes: number
    createdAt: Date
    boardId: number
    _count: KudosMessageCountAggregateOutputType | null
    _avg: KudosMessageAvgAggregateOutputType | null
    _sum: KudosMessageSumAggregateOutputType | null
    _min: KudosMessageMinAggregateOutputType | null
    _max: KudosMessageMaxAggregateOutputType | null
  }

  type GetKudosMessageGroupByPayload<T extends KudosMessageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<KudosMessageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof KudosMessageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], KudosMessageGroupByOutputType[P]>
            : GetScalarType<T[P], KudosMessageGroupByOutputType[P]>
        }
      >
    >


  export type KudosMessageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    message?: boolean
    image?: boolean
    upvotes?: boolean
    createdAt?: boolean
    boardId?: boolean
    board?: boolean | KudosBoardDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["kudosMessage"]>

  export type KudosMessageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    message?: boolean
    image?: boolean
    upvotes?: boolean
    createdAt?: boolean
    boardId?: boolean
    board?: boolean | KudosBoardDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["kudosMessage"]>

  export type KudosMessageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    message?: boolean
    image?: boolean
    upvotes?: boolean
    createdAt?: boolean
    boardId?: boolean
    board?: boolean | KudosBoardDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["kudosMessage"]>

  export type KudosMessageSelectScalar = {
    id?: boolean
    title?: boolean
    message?: boolean
    image?: boolean
    upvotes?: boolean
    createdAt?: boolean
    boardId?: boolean
  }

  export type KudosMessageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "message" | "image" | "upvotes" | "createdAt" | "boardId", ExtArgs["result"]["kudosMessage"]>
  export type KudosMessageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    board?: boolean | KudosBoardDefaultArgs<ExtArgs>
  }
  export type KudosMessageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    board?: boolean | KudosBoardDefaultArgs<ExtArgs>
  }
  export type KudosMessageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    board?: boolean | KudosBoardDefaultArgs<ExtArgs>
  }

  export type $KudosMessagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "KudosMessage"
    objects: {
      board: Prisma.$KudosBoardPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      message: string
      image: string
      upvotes: number
      createdAt: Date
      boardId: number
    }, ExtArgs["result"]["kudosMessage"]>
    composites: {}
  }

  type KudosMessageGetPayload<S extends boolean | null | undefined | KudosMessageDefaultArgs> = $Result.GetResult<Prisma.$KudosMessagePayload, S>

  type KudosMessageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<KudosMessageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: KudosMessageCountAggregateInputType | true
    }

  export interface KudosMessageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['KudosMessage'], meta: { name: 'KudosMessage' } }
    /**
     * Find zero or one KudosMessage that matches the filter.
     * @param {KudosMessageFindUniqueArgs} args - Arguments to find a KudosMessage
     * @example
     * // Get one KudosMessage
     * const kudosMessage = await prisma.kudosMessage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends KudosMessageFindUniqueArgs>(args: SelectSubset<T, KudosMessageFindUniqueArgs<ExtArgs>>): Prisma__KudosMessageClient<$Result.GetResult<Prisma.$KudosMessagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one KudosMessage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {KudosMessageFindUniqueOrThrowArgs} args - Arguments to find a KudosMessage
     * @example
     * // Get one KudosMessage
     * const kudosMessage = await prisma.kudosMessage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends KudosMessageFindUniqueOrThrowArgs>(args: SelectSubset<T, KudosMessageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__KudosMessageClient<$Result.GetResult<Prisma.$KudosMessagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first KudosMessage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KudosMessageFindFirstArgs} args - Arguments to find a KudosMessage
     * @example
     * // Get one KudosMessage
     * const kudosMessage = await prisma.kudosMessage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends KudosMessageFindFirstArgs>(args?: SelectSubset<T, KudosMessageFindFirstArgs<ExtArgs>>): Prisma__KudosMessageClient<$Result.GetResult<Prisma.$KudosMessagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first KudosMessage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KudosMessageFindFirstOrThrowArgs} args - Arguments to find a KudosMessage
     * @example
     * // Get one KudosMessage
     * const kudosMessage = await prisma.kudosMessage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends KudosMessageFindFirstOrThrowArgs>(args?: SelectSubset<T, KudosMessageFindFirstOrThrowArgs<ExtArgs>>): Prisma__KudosMessageClient<$Result.GetResult<Prisma.$KudosMessagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more KudosMessages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KudosMessageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all KudosMessages
     * const kudosMessages = await prisma.kudosMessage.findMany()
     * 
     * // Get first 10 KudosMessages
     * const kudosMessages = await prisma.kudosMessage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const kudosMessageWithIdOnly = await prisma.kudosMessage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends KudosMessageFindManyArgs>(args?: SelectSubset<T, KudosMessageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KudosMessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a KudosMessage.
     * @param {KudosMessageCreateArgs} args - Arguments to create a KudosMessage.
     * @example
     * // Create one KudosMessage
     * const KudosMessage = await prisma.kudosMessage.create({
     *   data: {
     *     // ... data to create a KudosMessage
     *   }
     * })
     * 
     */
    create<T extends KudosMessageCreateArgs>(args: SelectSubset<T, KudosMessageCreateArgs<ExtArgs>>): Prisma__KudosMessageClient<$Result.GetResult<Prisma.$KudosMessagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many KudosMessages.
     * @param {KudosMessageCreateManyArgs} args - Arguments to create many KudosMessages.
     * @example
     * // Create many KudosMessages
     * const kudosMessage = await prisma.kudosMessage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends KudosMessageCreateManyArgs>(args?: SelectSubset<T, KudosMessageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many KudosMessages and returns the data saved in the database.
     * @param {KudosMessageCreateManyAndReturnArgs} args - Arguments to create many KudosMessages.
     * @example
     * // Create many KudosMessages
     * const kudosMessage = await prisma.kudosMessage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many KudosMessages and only return the `id`
     * const kudosMessageWithIdOnly = await prisma.kudosMessage.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends KudosMessageCreateManyAndReturnArgs>(args?: SelectSubset<T, KudosMessageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KudosMessagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a KudosMessage.
     * @param {KudosMessageDeleteArgs} args - Arguments to delete one KudosMessage.
     * @example
     * // Delete one KudosMessage
     * const KudosMessage = await prisma.kudosMessage.delete({
     *   where: {
     *     // ... filter to delete one KudosMessage
     *   }
     * })
     * 
     */
    delete<T extends KudosMessageDeleteArgs>(args: SelectSubset<T, KudosMessageDeleteArgs<ExtArgs>>): Prisma__KudosMessageClient<$Result.GetResult<Prisma.$KudosMessagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one KudosMessage.
     * @param {KudosMessageUpdateArgs} args - Arguments to update one KudosMessage.
     * @example
     * // Update one KudosMessage
     * const kudosMessage = await prisma.kudosMessage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends KudosMessageUpdateArgs>(args: SelectSubset<T, KudosMessageUpdateArgs<ExtArgs>>): Prisma__KudosMessageClient<$Result.GetResult<Prisma.$KudosMessagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more KudosMessages.
     * @param {KudosMessageDeleteManyArgs} args - Arguments to filter KudosMessages to delete.
     * @example
     * // Delete a few KudosMessages
     * const { count } = await prisma.kudosMessage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends KudosMessageDeleteManyArgs>(args?: SelectSubset<T, KudosMessageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more KudosMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KudosMessageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many KudosMessages
     * const kudosMessage = await prisma.kudosMessage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends KudosMessageUpdateManyArgs>(args: SelectSubset<T, KudosMessageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more KudosMessages and returns the data updated in the database.
     * @param {KudosMessageUpdateManyAndReturnArgs} args - Arguments to update many KudosMessages.
     * @example
     * // Update many KudosMessages
     * const kudosMessage = await prisma.kudosMessage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more KudosMessages and only return the `id`
     * const kudosMessageWithIdOnly = await prisma.kudosMessage.updateManyAndReturn({
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
    updateManyAndReturn<T extends KudosMessageUpdateManyAndReturnArgs>(args: SelectSubset<T, KudosMessageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KudosMessagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one KudosMessage.
     * @param {KudosMessageUpsertArgs} args - Arguments to update or create a KudosMessage.
     * @example
     * // Update or create a KudosMessage
     * const kudosMessage = await prisma.kudosMessage.upsert({
     *   create: {
     *     // ... data to create a KudosMessage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the KudosMessage we want to update
     *   }
     * })
     */
    upsert<T extends KudosMessageUpsertArgs>(args: SelectSubset<T, KudosMessageUpsertArgs<ExtArgs>>): Prisma__KudosMessageClient<$Result.GetResult<Prisma.$KudosMessagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of KudosMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KudosMessageCountArgs} args - Arguments to filter KudosMessages to count.
     * @example
     * // Count the number of KudosMessages
     * const count = await prisma.kudosMessage.count({
     *   where: {
     *     // ... the filter for the KudosMessages we want to count
     *   }
     * })
    **/
    count<T extends KudosMessageCountArgs>(
      args?: Subset<T, KudosMessageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], KudosMessageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a KudosMessage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KudosMessageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends KudosMessageAggregateArgs>(args: Subset<T, KudosMessageAggregateArgs>): Prisma.PrismaPromise<GetKudosMessageAggregateType<T>>

    /**
     * Group by KudosMessage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KudosMessageGroupByArgs} args - Group by arguments.
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
      T extends KudosMessageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: KudosMessageGroupByArgs['orderBy'] }
        : { orderBy?: KudosMessageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, KudosMessageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetKudosMessageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the KudosMessage model
   */
  readonly fields: KudosMessageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for KudosMessage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__KudosMessageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    board<T extends KudosBoardDefaultArgs<ExtArgs> = {}>(args?: Subset<T, KudosBoardDefaultArgs<ExtArgs>>): Prisma__KudosBoardClient<$Result.GetResult<Prisma.$KudosBoardPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the KudosMessage model
   */
  interface KudosMessageFieldRefs {
    readonly id: FieldRef<"KudosMessage", 'Int'>
    readonly title: FieldRef<"KudosMessage", 'String'>
    readonly message: FieldRef<"KudosMessage", 'String'>
    readonly image: FieldRef<"KudosMessage", 'String'>
    readonly upvotes: FieldRef<"KudosMessage", 'Int'>
    readonly createdAt: FieldRef<"KudosMessage", 'DateTime'>
    readonly boardId: FieldRef<"KudosMessage", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * KudosMessage findUnique
   */
  export type KudosMessageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KudosMessage
     */
    select?: KudosMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KudosMessage
     */
    omit?: KudosMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KudosMessageInclude<ExtArgs> | null
    /**
     * Filter, which KudosMessage to fetch.
     */
    where: KudosMessageWhereUniqueInput
  }

  /**
   * KudosMessage findUniqueOrThrow
   */
  export type KudosMessageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KudosMessage
     */
    select?: KudosMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KudosMessage
     */
    omit?: KudosMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KudosMessageInclude<ExtArgs> | null
    /**
     * Filter, which KudosMessage to fetch.
     */
    where: KudosMessageWhereUniqueInput
  }

  /**
   * KudosMessage findFirst
   */
  export type KudosMessageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KudosMessage
     */
    select?: KudosMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KudosMessage
     */
    omit?: KudosMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KudosMessageInclude<ExtArgs> | null
    /**
     * Filter, which KudosMessage to fetch.
     */
    where?: KudosMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of KudosMessages to fetch.
     */
    orderBy?: KudosMessageOrderByWithRelationInput | KudosMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for KudosMessages.
     */
    cursor?: KudosMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` KudosMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` KudosMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of KudosMessages.
     */
    distinct?: KudosMessageScalarFieldEnum | KudosMessageScalarFieldEnum[]
  }

  /**
   * KudosMessage findFirstOrThrow
   */
  export type KudosMessageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KudosMessage
     */
    select?: KudosMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KudosMessage
     */
    omit?: KudosMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KudosMessageInclude<ExtArgs> | null
    /**
     * Filter, which KudosMessage to fetch.
     */
    where?: KudosMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of KudosMessages to fetch.
     */
    orderBy?: KudosMessageOrderByWithRelationInput | KudosMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for KudosMessages.
     */
    cursor?: KudosMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` KudosMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` KudosMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of KudosMessages.
     */
    distinct?: KudosMessageScalarFieldEnum | KudosMessageScalarFieldEnum[]
  }

  /**
   * KudosMessage findMany
   */
  export type KudosMessageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KudosMessage
     */
    select?: KudosMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KudosMessage
     */
    omit?: KudosMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KudosMessageInclude<ExtArgs> | null
    /**
     * Filter, which KudosMessages to fetch.
     */
    where?: KudosMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of KudosMessages to fetch.
     */
    orderBy?: KudosMessageOrderByWithRelationInput | KudosMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing KudosMessages.
     */
    cursor?: KudosMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` KudosMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` KudosMessages.
     */
    skip?: number
    distinct?: KudosMessageScalarFieldEnum | KudosMessageScalarFieldEnum[]
  }

  /**
   * KudosMessage create
   */
  export type KudosMessageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KudosMessage
     */
    select?: KudosMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KudosMessage
     */
    omit?: KudosMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KudosMessageInclude<ExtArgs> | null
    /**
     * The data needed to create a KudosMessage.
     */
    data: XOR<KudosMessageCreateInput, KudosMessageUncheckedCreateInput>
  }

  /**
   * KudosMessage createMany
   */
  export type KudosMessageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many KudosMessages.
     */
    data: KudosMessageCreateManyInput | KudosMessageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * KudosMessage createManyAndReturn
   */
  export type KudosMessageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KudosMessage
     */
    select?: KudosMessageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the KudosMessage
     */
    omit?: KudosMessageOmit<ExtArgs> | null
    /**
     * The data used to create many KudosMessages.
     */
    data: KudosMessageCreateManyInput | KudosMessageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KudosMessageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * KudosMessage update
   */
  export type KudosMessageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KudosMessage
     */
    select?: KudosMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KudosMessage
     */
    omit?: KudosMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KudosMessageInclude<ExtArgs> | null
    /**
     * The data needed to update a KudosMessage.
     */
    data: XOR<KudosMessageUpdateInput, KudosMessageUncheckedUpdateInput>
    /**
     * Choose, which KudosMessage to update.
     */
    where: KudosMessageWhereUniqueInput
  }

  /**
   * KudosMessage updateMany
   */
  export type KudosMessageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update KudosMessages.
     */
    data: XOR<KudosMessageUpdateManyMutationInput, KudosMessageUncheckedUpdateManyInput>
    /**
     * Filter which KudosMessages to update
     */
    where?: KudosMessageWhereInput
    /**
     * Limit how many KudosMessages to update.
     */
    limit?: number
  }

  /**
   * KudosMessage updateManyAndReturn
   */
  export type KudosMessageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KudosMessage
     */
    select?: KudosMessageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the KudosMessage
     */
    omit?: KudosMessageOmit<ExtArgs> | null
    /**
     * The data used to update KudosMessages.
     */
    data: XOR<KudosMessageUpdateManyMutationInput, KudosMessageUncheckedUpdateManyInput>
    /**
     * Filter which KudosMessages to update
     */
    where?: KudosMessageWhereInput
    /**
     * Limit how many KudosMessages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KudosMessageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * KudosMessage upsert
   */
  export type KudosMessageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KudosMessage
     */
    select?: KudosMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KudosMessage
     */
    omit?: KudosMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KudosMessageInclude<ExtArgs> | null
    /**
     * The filter to search for the KudosMessage to update in case it exists.
     */
    where: KudosMessageWhereUniqueInput
    /**
     * In case the KudosMessage found by the `where` argument doesn't exist, create a new KudosMessage with this data.
     */
    create: XOR<KudosMessageCreateInput, KudosMessageUncheckedCreateInput>
    /**
     * In case the KudosMessage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<KudosMessageUpdateInput, KudosMessageUncheckedUpdateInput>
  }

  /**
   * KudosMessage delete
   */
  export type KudosMessageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KudosMessage
     */
    select?: KudosMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KudosMessage
     */
    omit?: KudosMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KudosMessageInclude<ExtArgs> | null
    /**
     * Filter which KudosMessage to delete.
     */
    where: KudosMessageWhereUniqueInput
  }

  /**
   * KudosMessage deleteMany
   */
  export type KudosMessageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which KudosMessages to delete
     */
    where?: KudosMessageWhereInput
    /**
     * Limit how many KudosMessages to delete.
     */
    limit?: number
  }

  /**
   * KudosMessage without action
   */
  export type KudosMessageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KudosMessage
     */
    select?: KudosMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KudosMessage
     */
    omit?: KudosMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KudosMessageInclude<ExtArgs> | null
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


  export const KudosBoardScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    category: 'category',
    image: 'image',
    author: 'author',
    createdAt: 'createdAt'
  };

  export type KudosBoardScalarFieldEnum = (typeof KudosBoardScalarFieldEnum)[keyof typeof KudosBoardScalarFieldEnum]


  export const KudosMessageScalarFieldEnum: {
    id: 'id',
    title: 'title',
    message: 'message',
    image: 'image',
    upvotes: 'upvotes',
    createdAt: 'createdAt',
    boardId: 'boardId'
  };

  export type KudosMessageScalarFieldEnum = (typeof KudosMessageScalarFieldEnum)[keyof typeof KudosMessageScalarFieldEnum]


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


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


  export type KudosBoardWhereInput = {
    AND?: KudosBoardWhereInput | KudosBoardWhereInput[]
    OR?: KudosBoardWhereInput[]
    NOT?: KudosBoardWhereInput | KudosBoardWhereInput[]
    id?: IntFilter<"KudosBoard"> | number
    title?: StringFilter<"KudosBoard"> | string
    description?: StringFilter<"KudosBoard"> | string
    category?: StringFilter<"KudosBoard"> | string
    image?: StringFilter<"KudosBoard"> | string
    author?: StringNullableFilter<"KudosBoard"> | string | null
    createdAt?: DateTimeFilter<"KudosBoard"> | Date | string
    messages?: KudosMessageListRelationFilter
  }

  export type KudosBoardOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    category?: SortOrder
    image?: SortOrder
    author?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    messages?: KudosMessageOrderByRelationAggregateInput
  }

  export type KudosBoardWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: KudosBoardWhereInput | KudosBoardWhereInput[]
    OR?: KudosBoardWhereInput[]
    NOT?: KudosBoardWhereInput | KudosBoardWhereInput[]
    title?: StringFilter<"KudosBoard"> | string
    description?: StringFilter<"KudosBoard"> | string
    category?: StringFilter<"KudosBoard"> | string
    image?: StringFilter<"KudosBoard"> | string
    author?: StringNullableFilter<"KudosBoard"> | string | null
    createdAt?: DateTimeFilter<"KudosBoard"> | Date | string
    messages?: KudosMessageListRelationFilter
  }, "id">

  export type KudosBoardOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    category?: SortOrder
    image?: SortOrder
    author?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: KudosBoardCountOrderByAggregateInput
    _avg?: KudosBoardAvgOrderByAggregateInput
    _max?: KudosBoardMaxOrderByAggregateInput
    _min?: KudosBoardMinOrderByAggregateInput
    _sum?: KudosBoardSumOrderByAggregateInput
  }

  export type KudosBoardScalarWhereWithAggregatesInput = {
    AND?: KudosBoardScalarWhereWithAggregatesInput | KudosBoardScalarWhereWithAggregatesInput[]
    OR?: KudosBoardScalarWhereWithAggregatesInput[]
    NOT?: KudosBoardScalarWhereWithAggregatesInput | KudosBoardScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"KudosBoard"> | number
    title?: StringWithAggregatesFilter<"KudosBoard"> | string
    description?: StringWithAggregatesFilter<"KudosBoard"> | string
    category?: StringWithAggregatesFilter<"KudosBoard"> | string
    image?: StringWithAggregatesFilter<"KudosBoard"> | string
    author?: StringNullableWithAggregatesFilter<"KudosBoard"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"KudosBoard"> | Date | string
  }

  export type KudosMessageWhereInput = {
    AND?: KudosMessageWhereInput | KudosMessageWhereInput[]
    OR?: KudosMessageWhereInput[]
    NOT?: KudosMessageWhereInput | KudosMessageWhereInput[]
    id?: IntFilter<"KudosMessage"> | number
    title?: StringFilter<"KudosMessage"> | string
    message?: StringFilter<"KudosMessage"> | string
    image?: StringFilter<"KudosMessage"> | string
    upvotes?: IntFilter<"KudosMessage"> | number
    createdAt?: DateTimeFilter<"KudosMessage"> | Date | string
    boardId?: IntFilter<"KudosMessage"> | number
    board?: XOR<KudosBoardScalarRelationFilter, KudosBoardWhereInput>
  }

  export type KudosMessageOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    message?: SortOrder
    image?: SortOrder
    upvotes?: SortOrder
    createdAt?: SortOrder
    boardId?: SortOrder
    board?: KudosBoardOrderByWithRelationInput
  }

  export type KudosMessageWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: KudosMessageWhereInput | KudosMessageWhereInput[]
    OR?: KudosMessageWhereInput[]
    NOT?: KudosMessageWhereInput | KudosMessageWhereInput[]
    title?: StringFilter<"KudosMessage"> | string
    message?: StringFilter<"KudosMessage"> | string
    image?: StringFilter<"KudosMessage"> | string
    upvotes?: IntFilter<"KudosMessage"> | number
    createdAt?: DateTimeFilter<"KudosMessage"> | Date | string
    boardId?: IntFilter<"KudosMessage"> | number
    board?: XOR<KudosBoardScalarRelationFilter, KudosBoardWhereInput>
  }, "id">

  export type KudosMessageOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    message?: SortOrder
    image?: SortOrder
    upvotes?: SortOrder
    createdAt?: SortOrder
    boardId?: SortOrder
    _count?: KudosMessageCountOrderByAggregateInput
    _avg?: KudosMessageAvgOrderByAggregateInput
    _max?: KudosMessageMaxOrderByAggregateInput
    _min?: KudosMessageMinOrderByAggregateInput
    _sum?: KudosMessageSumOrderByAggregateInput
  }

  export type KudosMessageScalarWhereWithAggregatesInput = {
    AND?: KudosMessageScalarWhereWithAggregatesInput | KudosMessageScalarWhereWithAggregatesInput[]
    OR?: KudosMessageScalarWhereWithAggregatesInput[]
    NOT?: KudosMessageScalarWhereWithAggregatesInput | KudosMessageScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"KudosMessage"> | number
    title?: StringWithAggregatesFilter<"KudosMessage"> | string
    message?: StringWithAggregatesFilter<"KudosMessage"> | string
    image?: StringWithAggregatesFilter<"KudosMessage"> | string
    upvotes?: IntWithAggregatesFilter<"KudosMessage"> | number
    createdAt?: DateTimeWithAggregatesFilter<"KudosMessage"> | Date | string
    boardId?: IntWithAggregatesFilter<"KudosMessage"> | number
  }

  export type KudosBoardCreateInput = {
    title: string
    description: string
    category: string
    image: string
    author?: string | null
    createdAt?: Date | string
    messages?: KudosMessageCreateNestedManyWithoutBoardInput
  }

  export type KudosBoardUncheckedCreateInput = {
    id?: number
    title: string
    description: string
    category: string
    image: string
    author?: string | null
    createdAt?: Date | string
    messages?: KudosMessageUncheckedCreateNestedManyWithoutBoardInput
  }

  export type KudosBoardUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    author?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: KudosMessageUpdateManyWithoutBoardNestedInput
  }

  export type KudosBoardUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    author?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: KudosMessageUncheckedUpdateManyWithoutBoardNestedInput
  }

  export type KudosBoardCreateManyInput = {
    id?: number
    title: string
    description: string
    category: string
    image: string
    author?: string | null
    createdAt?: Date | string
  }

  export type KudosBoardUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    author?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KudosBoardUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    author?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KudosMessageCreateInput = {
    title: string
    message: string
    image: string
    upvotes?: number
    createdAt?: Date | string
    board: KudosBoardCreateNestedOneWithoutMessagesInput
  }

  export type KudosMessageUncheckedCreateInput = {
    id?: number
    title: string
    message: string
    image: string
    upvotes?: number
    createdAt?: Date | string
    boardId: number
  }

  export type KudosMessageUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    upvotes?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    board?: KudosBoardUpdateOneRequiredWithoutMessagesNestedInput
  }

  export type KudosMessageUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    upvotes?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    boardId?: IntFieldUpdateOperationsInput | number
  }

  export type KudosMessageCreateManyInput = {
    id?: number
    title: string
    message: string
    image: string
    upvotes?: number
    createdAt?: Date | string
    boardId: number
  }

  export type KudosMessageUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    upvotes?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KudosMessageUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    upvotes?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    boardId?: IntFieldUpdateOperationsInput | number
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

  export type KudosMessageListRelationFilter = {
    every?: KudosMessageWhereInput
    some?: KudosMessageWhereInput
    none?: KudosMessageWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type KudosMessageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type KudosBoardCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    category?: SortOrder
    image?: SortOrder
    author?: SortOrder
    createdAt?: SortOrder
  }

  export type KudosBoardAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type KudosBoardMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    category?: SortOrder
    image?: SortOrder
    author?: SortOrder
    createdAt?: SortOrder
  }

  export type KudosBoardMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    category?: SortOrder
    image?: SortOrder
    author?: SortOrder
    createdAt?: SortOrder
  }

  export type KudosBoardSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type KudosBoardScalarRelationFilter = {
    is?: KudosBoardWhereInput
    isNot?: KudosBoardWhereInput
  }

  export type KudosMessageCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    message?: SortOrder
    image?: SortOrder
    upvotes?: SortOrder
    createdAt?: SortOrder
    boardId?: SortOrder
  }

  export type KudosMessageAvgOrderByAggregateInput = {
    id?: SortOrder
    upvotes?: SortOrder
    boardId?: SortOrder
  }

  export type KudosMessageMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    message?: SortOrder
    image?: SortOrder
    upvotes?: SortOrder
    createdAt?: SortOrder
    boardId?: SortOrder
  }

  export type KudosMessageMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    message?: SortOrder
    image?: SortOrder
    upvotes?: SortOrder
    createdAt?: SortOrder
    boardId?: SortOrder
  }

  export type KudosMessageSumOrderByAggregateInput = {
    id?: SortOrder
    upvotes?: SortOrder
    boardId?: SortOrder
  }

  export type KudosMessageCreateNestedManyWithoutBoardInput = {
    create?: XOR<KudosMessageCreateWithoutBoardInput, KudosMessageUncheckedCreateWithoutBoardInput> | KudosMessageCreateWithoutBoardInput[] | KudosMessageUncheckedCreateWithoutBoardInput[]
    connectOrCreate?: KudosMessageCreateOrConnectWithoutBoardInput | KudosMessageCreateOrConnectWithoutBoardInput[]
    createMany?: KudosMessageCreateManyBoardInputEnvelope
    connect?: KudosMessageWhereUniqueInput | KudosMessageWhereUniqueInput[]
  }

  export type KudosMessageUncheckedCreateNestedManyWithoutBoardInput = {
    create?: XOR<KudosMessageCreateWithoutBoardInput, KudosMessageUncheckedCreateWithoutBoardInput> | KudosMessageCreateWithoutBoardInput[] | KudosMessageUncheckedCreateWithoutBoardInput[]
    connectOrCreate?: KudosMessageCreateOrConnectWithoutBoardInput | KudosMessageCreateOrConnectWithoutBoardInput[]
    createMany?: KudosMessageCreateManyBoardInputEnvelope
    connect?: KudosMessageWhereUniqueInput | KudosMessageWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type KudosMessageUpdateManyWithoutBoardNestedInput = {
    create?: XOR<KudosMessageCreateWithoutBoardInput, KudosMessageUncheckedCreateWithoutBoardInput> | KudosMessageCreateWithoutBoardInput[] | KudosMessageUncheckedCreateWithoutBoardInput[]
    connectOrCreate?: KudosMessageCreateOrConnectWithoutBoardInput | KudosMessageCreateOrConnectWithoutBoardInput[]
    upsert?: KudosMessageUpsertWithWhereUniqueWithoutBoardInput | KudosMessageUpsertWithWhereUniqueWithoutBoardInput[]
    createMany?: KudosMessageCreateManyBoardInputEnvelope
    set?: KudosMessageWhereUniqueInput | KudosMessageWhereUniqueInput[]
    disconnect?: KudosMessageWhereUniqueInput | KudosMessageWhereUniqueInput[]
    delete?: KudosMessageWhereUniqueInput | KudosMessageWhereUniqueInput[]
    connect?: KudosMessageWhereUniqueInput | KudosMessageWhereUniqueInput[]
    update?: KudosMessageUpdateWithWhereUniqueWithoutBoardInput | KudosMessageUpdateWithWhereUniqueWithoutBoardInput[]
    updateMany?: KudosMessageUpdateManyWithWhereWithoutBoardInput | KudosMessageUpdateManyWithWhereWithoutBoardInput[]
    deleteMany?: KudosMessageScalarWhereInput | KudosMessageScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type KudosMessageUncheckedUpdateManyWithoutBoardNestedInput = {
    create?: XOR<KudosMessageCreateWithoutBoardInput, KudosMessageUncheckedCreateWithoutBoardInput> | KudosMessageCreateWithoutBoardInput[] | KudosMessageUncheckedCreateWithoutBoardInput[]
    connectOrCreate?: KudosMessageCreateOrConnectWithoutBoardInput | KudosMessageCreateOrConnectWithoutBoardInput[]
    upsert?: KudosMessageUpsertWithWhereUniqueWithoutBoardInput | KudosMessageUpsertWithWhereUniqueWithoutBoardInput[]
    createMany?: KudosMessageCreateManyBoardInputEnvelope
    set?: KudosMessageWhereUniqueInput | KudosMessageWhereUniqueInput[]
    disconnect?: KudosMessageWhereUniqueInput | KudosMessageWhereUniqueInput[]
    delete?: KudosMessageWhereUniqueInput | KudosMessageWhereUniqueInput[]
    connect?: KudosMessageWhereUniqueInput | KudosMessageWhereUniqueInput[]
    update?: KudosMessageUpdateWithWhereUniqueWithoutBoardInput | KudosMessageUpdateWithWhereUniqueWithoutBoardInput[]
    updateMany?: KudosMessageUpdateManyWithWhereWithoutBoardInput | KudosMessageUpdateManyWithWhereWithoutBoardInput[]
    deleteMany?: KudosMessageScalarWhereInput | KudosMessageScalarWhereInput[]
  }

  export type KudosBoardCreateNestedOneWithoutMessagesInput = {
    create?: XOR<KudosBoardCreateWithoutMessagesInput, KudosBoardUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: KudosBoardCreateOrConnectWithoutMessagesInput
    connect?: KudosBoardWhereUniqueInput
  }

  export type KudosBoardUpdateOneRequiredWithoutMessagesNestedInput = {
    create?: XOR<KudosBoardCreateWithoutMessagesInput, KudosBoardUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: KudosBoardCreateOrConnectWithoutMessagesInput
    upsert?: KudosBoardUpsertWithoutMessagesInput
    connect?: KudosBoardWhereUniqueInput
    update?: XOR<XOR<KudosBoardUpdateToOneWithWhereWithoutMessagesInput, KudosBoardUpdateWithoutMessagesInput>, KudosBoardUncheckedUpdateWithoutMessagesInput>
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

  export type KudosMessageCreateWithoutBoardInput = {
    title: string
    message: string
    image: string
    upvotes?: number
    createdAt?: Date | string
  }

  export type KudosMessageUncheckedCreateWithoutBoardInput = {
    id?: number
    title: string
    message: string
    image: string
    upvotes?: number
    createdAt?: Date | string
  }

  export type KudosMessageCreateOrConnectWithoutBoardInput = {
    where: KudosMessageWhereUniqueInput
    create: XOR<KudosMessageCreateWithoutBoardInput, KudosMessageUncheckedCreateWithoutBoardInput>
  }

  export type KudosMessageCreateManyBoardInputEnvelope = {
    data: KudosMessageCreateManyBoardInput | KudosMessageCreateManyBoardInput[]
    skipDuplicates?: boolean
  }

  export type KudosMessageUpsertWithWhereUniqueWithoutBoardInput = {
    where: KudosMessageWhereUniqueInput
    update: XOR<KudosMessageUpdateWithoutBoardInput, KudosMessageUncheckedUpdateWithoutBoardInput>
    create: XOR<KudosMessageCreateWithoutBoardInput, KudosMessageUncheckedCreateWithoutBoardInput>
  }

  export type KudosMessageUpdateWithWhereUniqueWithoutBoardInput = {
    where: KudosMessageWhereUniqueInput
    data: XOR<KudosMessageUpdateWithoutBoardInput, KudosMessageUncheckedUpdateWithoutBoardInput>
  }

  export type KudosMessageUpdateManyWithWhereWithoutBoardInput = {
    where: KudosMessageScalarWhereInput
    data: XOR<KudosMessageUpdateManyMutationInput, KudosMessageUncheckedUpdateManyWithoutBoardInput>
  }

  export type KudosMessageScalarWhereInput = {
    AND?: KudosMessageScalarWhereInput | KudosMessageScalarWhereInput[]
    OR?: KudosMessageScalarWhereInput[]
    NOT?: KudosMessageScalarWhereInput | KudosMessageScalarWhereInput[]
    id?: IntFilter<"KudosMessage"> | number
    title?: StringFilter<"KudosMessage"> | string
    message?: StringFilter<"KudosMessage"> | string
    image?: StringFilter<"KudosMessage"> | string
    upvotes?: IntFilter<"KudosMessage"> | number
    createdAt?: DateTimeFilter<"KudosMessage"> | Date | string
    boardId?: IntFilter<"KudosMessage"> | number
  }

  export type KudosBoardCreateWithoutMessagesInput = {
    title: string
    description: string
    category: string
    image: string
    author?: string | null
    createdAt?: Date | string
  }

  export type KudosBoardUncheckedCreateWithoutMessagesInput = {
    id?: number
    title: string
    description: string
    category: string
    image: string
    author?: string | null
    createdAt?: Date | string
  }

  export type KudosBoardCreateOrConnectWithoutMessagesInput = {
    where: KudosBoardWhereUniqueInput
    create: XOR<KudosBoardCreateWithoutMessagesInput, KudosBoardUncheckedCreateWithoutMessagesInput>
  }

  export type KudosBoardUpsertWithoutMessagesInput = {
    update: XOR<KudosBoardUpdateWithoutMessagesInput, KudosBoardUncheckedUpdateWithoutMessagesInput>
    create: XOR<KudosBoardCreateWithoutMessagesInput, KudosBoardUncheckedCreateWithoutMessagesInput>
    where?: KudosBoardWhereInput
  }

  export type KudosBoardUpdateToOneWithWhereWithoutMessagesInput = {
    where?: KudosBoardWhereInput
    data: XOR<KudosBoardUpdateWithoutMessagesInput, KudosBoardUncheckedUpdateWithoutMessagesInput>
  }

  export type KudosBoardUpdateWithoutMessagesInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    author?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KudosBoardUncheckedUpdateWithoutMessagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    author?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KudosMessageCreateManyBoardInput = {
    id?: number
    title: string
    message: string
    image: string
    upvotes?: number
    createdAt?: Date | string
  }

  export type KudosMessageUpdateWithoutBoardInput = {
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    upvotes?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KudosMessageUncheckedUpdateWithoutBoardInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    upvotes?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KudosMessageUncheckedUpdateManyWithoutBoardInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    upvotes?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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