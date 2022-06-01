export async function scheduler(ctx: Context, next: () => Promise<any>) {
  const {
    clients: { Scheduler },
  } = ctx

  // start scheduler
  await Scheduler.scheduler()

  console.info('my scheduler is working')

  ctx.status = 200

  ctx.body = {
    message: 'successfully scheduled task.',
  }

  ctx.set({ 'Cache-Control': 'no-cache' })

  await next()
}
