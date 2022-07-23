/// <reference types="vite/client" />

interface ImportMetaEnv {
	readonly VUE_APP_FLAG: string
}

interface ImportMeta {
	readonly env: ImportMetaEnv
}
