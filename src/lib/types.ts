export type VercelDeploymentLogType = (| {
  type: 'command'
  created: number
  payload: {
    deploymentId: string
    text?: string
    id: string
    date: number
    serial: string
  }
} | {
  type: 'deployment-state'
  created: number
  payload: {
    deploymentId: string
    info: {
      type: string
      name: string
      entrypoint?: string
      path?: string
      step?: string
    }
    id: string
    date: number
    serial: string
  }
} | {
  type: 'delimiter'
  created: number
  payload: {
    deploymentId: string
    info: {
      type: string
      name: string
      entrypoint?: string
      path?: string
      step?: string
    }
    id: string
    date: number
    serial: string
  }
} | {
  type: 'exit'
  created: number
  payload: {
    date: number
    text?: string
    id: string
    deploymentId: string
    created: number
    serial: string
  }
} | {
  type: 'middleware'
  created: number
  payload: {
    deploymentId: string
    info: {
      type: string
      name: string
      entrypoint?: string
      path?: string
      step?: string
    }
    text?: string
    id: string
    date: number
    serial: string
    requestId?: string
  }
} | {
  type: | 'delimiter' | 'command' | 'stdout' | 'stderr' | 'exit' | 'deployment-state' | 'middleware' | 'middleware-invocation' | 'edge-function-invocation' | 'fatal'
  created: number
  payload: {
    deploymentId: string
    info: {
      type: string
      name: string
      entrypoint?: string
      path?: string
      step?: string
    }
    text?: string
    id: string
    date: number
    serial: string
    statusCode?: number
    requestId?: string
  }
} | (| { [key: string]: unknown } | {
  type: 'command'
  created: number
  payload: {
    deploymentId: string
    text?: string
    id: string
    date: number
    serial: string
  }
} | {
  type: 'deployment-state'
  created: number
  payload: {
    deploymentId: string
    info: {
      type: string
      name: string
      entrypoint?: string
      path?: string
      step?: string
    }
    id: string
    date: number
    serial: string
  }
} | {
  type: 'delimiter'
  created: number
  payload: {
    deploymentId: string
    info: {
      type: string
      name: string
      entrypoint?: string
      path?: string
      step?: string
    }
    id: string
    date: number
    serial: string
  }
} | {
  type: 'exit'
  created: number
  payload: {
    date: number
    text?: string
    id: string
    deploymentId: string
    created: number
    serial: string
  }
} | {
  type: 'middleware'
  created: number
  payload: {
    deploymentId: string
    info: {
      type: string
      name: string
      entrypoint?: string
      path?: string
      step?: string
    }
    text?: string
    id: string
    date: number
    serial: string
    requestId?: string
  }
} | {
  type: | 'delimiter' | 'command' | 'stdout' | 'stderr' | 'exit' | 'deployment-state' | 'middleware' | 'middleware-invocation' | 'edge-function-invocation' | 'fatal'
  created: number
  payload: {
    deploymentId: string
    info: {
      type: string
      name: string
      entrypoint?: string
      path?: string
      step?: string
    }
    text?: string
    id: string
    date: number
    serial: string
    statusCode?: number
    requestId?: string
  }
}))[]

export type VercelDeploymentType = {
  deployments: VercelDeploymentBaseType[]
}

export type VercelDeploymentBaseType = {
  uid: string;
  name: string;
  url: string;
  created: number;
  source: string;
  readyState: string;
  type: string;
  creator: {
    uid: string;
  };
  inspectorUrl: string;
}

export type AIModels = Array<{ model: string }>