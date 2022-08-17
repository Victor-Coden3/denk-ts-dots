import { IPathOptions, resolveValue } from 'path-value';

import { Path, PathValue } from './types';

export * from './types';

export function get<O extends object, P extends Path<O>> (
    source: O,
    path: P & string,
    options?: IPathOptions,
): PathValue<O, P> {
    return resolveValue(source, path, options);
}
