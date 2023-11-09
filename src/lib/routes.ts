
type CreateDeploymentRouteType = {
  projectId: string
}

export const createDeploymentRoute = ({ projectId }: CreateDeploymentRouteType) => {
  return `/d/${projectId}`
}


type CreateLogRouteType = CreateDeploymentRouteType & {
  uid: string
  url?: string
}

export const createLogRoute = ({ uid, projectId, url }: CreateLogRouteType) => {
  return `${createDeploymentRoute({ projectId })}/w/${uid}?url=${url}`
}