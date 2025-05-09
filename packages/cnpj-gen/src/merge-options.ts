import mergeDeep from 'deepmerge';

export interface ActualCnpjGeneratorOptions {
  format: boolean;
  prefix: string;
}

export type CnpjGeneratorOptions = Partial<ActualCnpjGeneratorOptions>;

const defaultOptions = {
  format: false,
  prefix: '',
};

/**
 * Merge custom options to the default ones.
 */
function mergeOptions(customOptions: CnpjGeneratorOptions = {}): ActualCnpjGeneratorOptions {
  return mergeDeep(defaultOptions, customOptions);
}

export default mergeOptions;
