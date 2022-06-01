import type { InstanceOptions, IOContext, ExternalClient } from '@vtex/api'

import { createScheduler } from '../utils/scheduler'

export default class Scheduler extends ExternalClient {
  constructor(context: IOContext, options?: InstanceOptions) {
    super('', context, options)
  }

  public async scheduler() {
    createScheduler()
  }
}
