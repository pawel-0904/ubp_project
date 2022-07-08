import { isNil, omitBy } from '../index';

const omitNils = obj => omitBy(obj, isNil);

export default omitNils;
