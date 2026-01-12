import { fileExists } from './filesystem'

export const hasComposer = fileExists('composer.json')
export const hasNpm = fileExists('package.json')
export const hasYarn = fileExists('yarn.lock')
export const hasPnpm = fileExists('pnpm-lock.yaml')
