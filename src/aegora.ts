import Core from './index'

/**
 * Primary Aegora application class.
 */
export const Aegora = Core

export default Aegora

export type AnyAegora = InstanceType<typeof Aegora>

export { t } from './type-system'
export { validationDetail, fileType } from './type-system/utils'
export type {
	ElysiaTypeCustomError as AegoraTypeCustomError,
	ElysiaTypeCustomErrorCallback as AegoraTypeCustomErrorCallback
} from './type-system/types'

export { serializeCookie, Cookie, type CookieOptions } from './cookies'
export type { Context, PreContext, ErrorContext } from './context'

export {
	ELYSIA_TRACE as AEGORA_TRACE,
	type TraceEvent,
	type TraceListener,
	type TraceHandler,
	type TraceProcess,
	type TraceStream
} from './trace'

export { getSchemaValidator, getResponseSchemaValidator } from './schema'
export { replaceSchemaTypeFromManyOptions as replaceSchemaType } from './replace-schema'

export {
	mergeHook,
	mergeObjectArray,
	redirect,
	StatusMap,
	InvertedStatusMap,
	form,
	replaceUrlPath,
	checksum,
	cloneInference,
	deduplicateChecksum,
	ELYSIA_FORM_DATA as AEGORA_FORM_DATA,
	ELYSIA_REQUEST_ID as AEGORA_REQUEST_ID,
	sse
} from './utils'

export {
	status,
	mapValueError,
	ParseError,
	NotFoundError,
	ValidationError,
	InvalidFileType,
	InternalServerError,
	InvalidCookieSignature,
	ERROR_CODE,
	ElysiaStatus as AegoraStatus,
	ElysiaCustomStatusResponse as AegoraCustomStatusResponse,
	type SelectiveStatus
} from './error'

export type {
	EphemeralType,
	CreateEden,
	ComposeElysiaResponse as ComposeAegoraResponse,
	ElysiaConfig as AegoraConfig,
	SingletonBase,
	DefinitionBase,
	RouteBase,
	Handler,
	ComposedHandler,
	InputSchema,
	LocalHook,
	MergeSchema,
	RouteSchema,
	UnwrapRoute,
	InternalRoute,
	HTTPMethod,
	SchemaValidator,
	VoidHandler,
	PreHandler,
	BodyHandler,
	OptionalHandler,
	AfterResponseHandler,
	ErrorHandler,
	LifeCycleEvent,
	LifeCycleStore,
	LifeCycleType,
	MaybePromise,
	UnwrapSchema,
	AnySchema,
	ModelsToTypes,
	Checksum,
	DocumentDecoration,
	InferContext,
	InferHandler,
	ResolvePath,
	MapResponse,
	BaseMacro,
	MacroManager,
	MacroToProperty,
	MergeElysiaInstances as MergeAegoraInstances,
	MaybeArray,
	ModelValidator,
	MetadataBase,
	UnwrapBodySchema,
	UnwrapGroupGuardRoute,
	ModelValidatorError,
	ExcludeElysiaResponse as ExcludeAegoraResponse,
	SSEPayload,
	StandaloneInputSchema,
	MergeStandaloneSchema,
	MergeTypeModule,
	GracefulHandler,
	AfterHandler,
	InlineHandler,
	ResolveHandler,
	TransformHandler,
	HTTPHeaders,
	EmptyRouteSchema,
	ExtractErrorFromHandle
} from './types'

export { env } from './universal/env'
export { file, ElysiaFile as AegoraFile } from './universal/file'
export type { ElysiaAdapter as AegoraAdapter } from './adapter'

export { TypeSystemPolicy } from '@sinclair/typebox/system'
export type { Static, TSchema } from '@sinclair/typebox'
