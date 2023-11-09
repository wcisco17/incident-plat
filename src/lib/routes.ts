
type CreateDeploymentRouteType = {
  app: string
}

export const createDeploymentRoute = ({ app }: CreateDeploymentRouteType) => {
  return `/d/${app}`
}


type CreateLogRouteType = CreateDeploymentRouteType & {
  uid: string
  url?: string
}

export const createLogRoute = ({ uid, app, url }: CreateLogRouteType) => {
  return `${createDeploymentRoute({ app })}/w/${uid}?url=${url}`
}