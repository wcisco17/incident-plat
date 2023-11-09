export type NextSearchParams = Record<string, string | string[] | undefined>

export type NextDefaultSearchParamsValue = Record<string, never>

export type NextPageSearchParams<
  T extends NextSearchParams = NextDefaultSearchParamsValue,
> = Partial<T>

export type NextPageParams<ParamKeys extends string = never> = Record<
  ParamKeys,
  string
>

export type NextPageProps<
  Params extends NextPageParams = NextPageParams,
  SearchParams extends
    NextPageSearchParams<NextSearchParams> = NextDefaultSearchParamsValue,
> = {
  params: Params
  searchParams: SearchParams
}

export type DeploymentBasePageParams = NextPageParams<
  'projectId' | 'uid'
>

export type DeploymentPageParams<ParamKeys extends string = never> =
  DeploymentBasePageParams & NextPageParams<ParamKeys>

export type DeploymentPageProps<
  AdditionalParamKeys extends string = never,
  SearchParams extends NextSearchParams = NextDefaultSearchParamsValue,
> = NextPageProps<
  DeploymentPageParams<AdditionalParamKeys>,
  NextPageSearchParams<SearchParams>
>