import * as _ from 'lodash';

export class UniqueIdProvider {
  generate(): number {
    return parseInt(_.uniqueId());
  }
}
