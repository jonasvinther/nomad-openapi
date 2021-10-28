import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import * as models from '../models/all';
import { Configuration} from '../configuration'

import { ACLPolicyListStub } from '../models/ACLPolicyListStub';
import { Affinity } from '../models/Affinity';
import { AllocDeploymentStatus } from '../models/AllocDeploymentStatus';
import { AllocatedCpuResources } from '../models/AllocatedCpuResources';
import { AllocatedDeviceResource } from '../models/AllocatedDeviceResource';
import { AllocatedMemoryResources } from '../models/AllocatedMemoryResources';
import { AllocatedResources } from '../models/AllocatedResources';
import { AllocatedSharedResources } from '../models/AllocatedSharedResources';
import { AllocatedTaskResources } from '../models/AllocatedTaskResources';
import { Allocation } from '../models/Allocation';
import { AllocationListStub } from '../models/AllocationListStub';
import { AllocationMetric } from '../models/AllocationMetric';
import { CSIControllerInfo } from '../models/CSIControllerInfo';
import { CSIInfo } from '../models/CSIInfo';
import { CSIMountOptions } from '../models/CSIMountOptions';
import { CSINodeInfo } from '../models/CSINodeInfo';
import { CSIPlugin } from '../models/CSIPlugin';
import { CSIPluginListStub } from '../models/CSIPluginListStub';
import { CSISnapshot } from '../models/CSISnapshot';
import { CSISnapshotCreateRequest } from '../models/CSISnapshotCreateRequest';
import { CSISnapshotCreateResponse } from '../models/CSISnapshotCreateResponse';
import { CSISnapshotListResponse } from '../models/CSISnapshotListResponse';
import { CSITopology } from '../models/CSITopology';
import { CSIVolume } from '../models/CSIVolume';
import { CSIVolumeCapability } from '../models/CSIVolumeCapability';
import { CSIVolumeCreateRequest } from '../models/CSIVolumeCreateRequest';
import { CSIVolumeExternalStub } from '../models/CSIVolumeExternalStub';
import { CSIVolumeListExternalResponse } from '../models/CSIVolumeListExternalResponse';
import { CSIVolumeListStub } from '../models/CSIVolumeListStub';
import { CSIVolumeRegisterRequest } from '../models/CSIVolumeRegisterRequest';
import { CheckRestart } from '../models/CheckRestart';
import { Constraint } from '../models/Constraint';
import { Consul } from '../models/Consul';
import { ConsulConnect } from '../models/ConsulConnect';
import { ConsulExposeConfig } from '../models/ConsulExposeConfig';
import { ConsulExposePath } from '../models/ConsulExposePath';
import { ConsulGateway } from '../models/ConsulGateway';
import { ConsulGatewayBindAddress } from '../models/ConsulGatewayBindAddress';
import { ConsulGatewayProxy } from '../models/ConsulGatewayProxy';
import { ConsulGatewayTLSConfig } from '../models/ConsulGatewayTLSConfig';
import { ConsulIngressConfigEntry } from '../models/ConsulIngressConfigEntry';
import { ConsulIngressListener } from '../models/ConsulIngressListener';
import { ConsulIngressService } from '../models/ConsulIngressService';
import { ConsulLinkedService } from '../models/ConsulLinkedService';
import { ConsulMeshGateway } from '../models/ConsulMeshGateway';
import { ConsulProxy } from '../models/ConsulProxy';
import { ConsulSidecarService } from '../models/ConsulSidecarService';
import { ConsulTerminatingConfigEntry } from '../models/ConsulTerminatingConfigEntry';
import { ConsulUpstream } from '../models/ConsulUpstream';
import { DNSConfig } from '../models/DNSConfig';
import { Deployment } from '../models/Deployment';
import { DeploymentState } from '../models/DeploymentState';
import { DesiredTransition } from '../models/DesiredTransition';
import { DesiredUpdates } from '../models/DesiredUpdates';
import { DispatchPayloadConfig } from '../models/DispatchPayloadConfig';
import { EphemeralDisk } from '../models/EphemeralDisk';
import { EvalOptions } from '../models/EvalOptions';
import { Evaluation } from '../models/Evaluation';
import { FieldDiff } from '../models/FieldDiff';
import { FuzzyMatch } from '../models/FuzzyMatch';
import { FuzzySearchRequest } from '../models/FuzzySearchRequest';
import { FuzzySearchResponse } from '../models/FuzzySearchResponse';
import { GaugeValue } from '../models/GaugeValue';
import { Job } from '../models/Job';
import { JobChildrenSummary } from '../models/JobChildrenSummary';
import { JobDeregisterResponse } from '../models/JobDeregisterResponse';
import { JobDiff } from '../models/JobDiff';
import { JobDispatchRequest } from '../models/JobDispatchRequest';
import { JobDispatchResponse } from '../models/JobDispatchResponse';
import { JobEvaluateRequest } from '../models/JobEvaluateRequest';
import { JobListStub } from '../models/JobListStub';
import { JobPlanRequest } from '../models/JobPlanRequest';
import { JobPlanResponse } from '../models/JobPlanResponse';
import { JobRegisterRequest } from '../models/JobRegisterRequest';
import { JobRegisterResponse } from '../models/JobRegisterResponse';
import { JobRevertRequest } from '../models/JobRevertRequest';
import { JobScaleStatusResponse } from '../models/JobScaleStatusResponse';
import { JobStabilityRequest } from '../models/JobStabilityRequest';
import { JobStabilityResponse } from '../models/JobStabilityResponse';
import { JobSummary } from '../models/JobSummary';
import { JobValidateRequest } from '../models/JobValidateRequest';
import { JobValidateResponse } from '../models/JobValidateResponse';
import { JobVersionsResponse } from '../models/JobVersionsResponse';
import { JobsParseRequest } from '../models/JobsParseRequest';
import { LogConfig } from '../models/LogConfig';
import { MetricsSummary } from '../models/MetricsSummary';
import { MigrateStrategy } from '../models/MigrateStrategy';
import { Multiregion } from '../models/Multiregion';
import { MultiregionRegion } from '../models/MultiregionRegion';
import { MultiregionStrategy } from '../models/MultiregionStrategy';
import { Namespace } from '../models/Namespace';
import { NetworkResource } from '../models/NetworkResource';
import { NodeScoreMeta } from '../models/NodeScoreMeta';
import { ObjectDiff } from '../models/ObjectDiff';
import { ParameterizedJobConfig } from '../models/ParameterizedJobConfig';
import { PeriodicConfig } from '../models/PeriodicConfig';
import { PeriodicForceResponse } from '../models/PeriodicForceResponse';
import { PlanAnnotations } from '../models/PlanAnnotations';
import { PointValue } from '../models/PointValue';
import { Port } from '../models/Port';
import { PortMapping } from '../models/PortMapping';
import { QuotaLimit } from '../models/QuotaLimit';
import { QuotaSpec } from '../models/QuotaSpec';
import { RequestedDevice } from '../models/RequestedDevice';
import { RescheduleEvent } from '../models/RescheduleEvent';
import { ReschedulePolicy } from '../models/ReschedulePolicy';
import { RescheduleTracker } from '../models/RescheduleTracker';
import { Resources } from '../models/Resources';
import { RestartPolicy } from '../models/RestartPolicy';
import { SampledValue } from '../models/SampledValue';
import { ScalingEvent } from '../models/ScalingEvent';
import { ScalingPolicy } from '../models/ScalingPolicy';
import { ScalingPolicyListStub } from '../models/ScalingPolicyListStub';
import { ScalingRequest } from '../models/ScalingRequest';
import { SearchRequest } from '../models/SearchRequest';
import { SearchResponse } from '../models/SearchResponse';
import { Service } from '../models/Service';
import { ServiceCheck } from '../models/ServiceCheck';
import { SidecarTask } from '../models/SidecarTask';
import { Spread } from '../models/Spread';
import { SpreadTarget } from '../models/SpreadTarget';
import { Task } from '../models/Task';
import { TaskArtifact } from '../models/TaskArtifact';
import { TaskCSIPluginConfig } from '../models/TaskCSIPluginConfig';
import { TaskDiff } from '../models/TaskDiff';
import { TaskEvent } from '../models/TaskEvent';
import { TaskGroup } from '../models/TaskGroup';
import { TaskGroupDiff } from '../models/TaskGroupDiff';
import { TaskGroupScaleStatus } from '../models/TaskGroupScaleStatus';
import { TaskGroupSummary } from '../models/TaskGroupSummary';
import { TaskHandle } from '../models/TaskHandle';
import { TaskLifecycle } from '../models/TaskLifecycle';
import { TaskState } from '../models/TaskState';
import { Template } from '../models/Template';
import { UpdateStrategy } from '../models/UpdateStrategy';
import { Vault } from '../models/Vault';
import { VolumeMount } from '../models/VolumeMount';
import { VolumeRequest } from '../models/VolumeRequest';
import { ObservableACLApi } from './ObservableAPI';

import { ACLApiRequestFactory, ACLApiResponseProcessor} from "../apis/ACLApi";
export class PromiseACLApi {
    private api: ObservableACLApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ACLApiRequestFactory,
        responseProcessor?: ACLApiResponseProcessor
    ) {
        this.api = new ObservableACLApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param region Filters results based on the specified region.
     * @param namespace Filters results based on the specified namespace.
     * @param index If set, wait until query exceeds given index. Must be provided with WaitParam.
     * @param wait Provided with IndexParam to wait for change.
     * @param stale If present, results will include stale reads.
     * @param prefix Constrains results to jobs that start with the defined prefix
     * @param xNomadToken A Nomad ACL token.
     * @param perPage Maximum number of results to return.
     * @param nextToken Indicates where to start paging for queries that support pagination.
     */
    public getACLPolicies(region?: string, namespace?: string, index?: number, wait?: string, stale?: string, prefix?: string, xNomadToken?: string, perPage?: number, nextToken?: string, _options?: Configuration): Promise<Array<ACLPolicyListStub>> {
        const result = this.api.getACLPolicies(region, namespace, index, wait, stale, prefix, xNomadToken, perPage, nextToken, _options);
        return result.toPromise();
    }


}



import { ObservableAllocationsApi } from './ObservableAPI';

import { AllocationsApiRequestFactory, AllocationsApiResponseProcessor} from "../apis/AllocationsApi";
export class PromiseAllocationsApi {
    private api: ObservableAllocationsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: AllocationsApiRequestFactory,
        responseProcessor?: AllocationsApiResponseProcessor
    ) {
        this.api = new ObservableAllocationsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param region Filters results based on the specified region.
     * @param namespace Filters results based on the specified namespace.
     * @param index If set, wait until query exceeds given index. Must be provided with WaitParam.
     * @param wait Provided with IndexParam to wait for change.
     * @param stale If present, results will include stale reads.
     * @param prefix Constrains results to jobs that start with the defined prefix
     * @param xNomadToken A Nomad ACL token.
     * @param perPage Maximum number of results to return.
     * @param nextToken Indicates where to start paging for queries that support pagination.
     * @param resources Flag indicating whether to include resources in response.
     * @param taskStates Flag indicating whether to include task states in response.
     */
    public getAllocations(region?: string, namespace?: string, index?: number, wait?: string, stale?: string, prefix?: string, xNomadToken?: string, perPage?: number, nextToken?: string, resources?: boolean, taskStates?: boolean, _options?: Configuration): Promise<Array<AllocationListStub>> {
        const result = this.api.getAllocations(region, namespace, index, wait, stale, prefix, xNomadToken, perPage, nextToken, resources, taskStates, _options);
        return result.toPromise();
    }


}



import { ObservableEnterpriseApi } from './ObservableAPI';

import { EnterpriseApiRequestFactory, EnterpriseApiResponseProcessor} from "../apis/EnterpriseApi";
export class PromiseEnterpriseApi {
    private api: ObservableEnterpriseApi

    public constructor(
        configuration: Configuration,
        requestFactory?: EnterpriseApiRequestFactory,
        responseProcessor?: EnterpriseApiResponseProcessor
    ) {
        this.api = new ObservableEnterpriseApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param quotaSpec 
     * @param region Filters results based on the specified region.
     * @param namespace Filters results based on the specified namespace.
     * @param xNomadToken A Nomad ACL token.
     * @param idempotencyToken Can be used to ensure operations are only run once.
     */
    public createQuotaSpec(quotaSpec: QuotaSpec, region?: string, namespace?: string, xNomadToken?: string, idempotencyToken?: string, _options?: Configuration): Promise<void> {
        const result = this.api.createQuotaSpec(quotaSpec, region, namespace, xNomadToken, idempotencyToken, _options);
        return result.toPromise();
    }

    /**
     * @param specName The quota spec identifier.
     * @param region Filters results based on the specified region.
     * @param namespace Filters results based on the specified namespace.
     * @param xNomadToken A Nomad ACL token.
     * @param idempotencyToken Can be used to ensure operations are only run once.
     */
    public deleteQuotaSpec(specName: string, region?: string, namespace?: string, xNomadToken?: string, idempotencyToken?: string, _options?: Configuration): Promise<void> {
        const result = this.api.deleteQuotaSpec(specName, region, namespace, xNomadToken, idempotencyToken, _options);
        return result.toPromise();
    }

    /**
     * @param specName The quota spec identifier.
     * @param region Filters results based on the specified region.
     * @param namespace Filters results based on the specified namespace.
     * @param index If set, wait until query exceeds given index. Must be provided with WaitParam.
     * @param wait Provided with IndexParam to wait for change.
     * @param stale If present, results will include stale reads.
     * @param prefix Constrains results to jobs that start with the defined prefix
     * @param xNomadToken A Nomad ACL token.
     * @param perPage Maximum number of results to return.
     * @param nextToken Indicates where to start paging for queries that support pagination.
     */
    public getQuotaSpec(specName: string, region?: string, namespace?: string, index?: number, wait?: string, stale?: string, prefix?: string, xNomadToken?: string, perPage?: number, nextToken?: string, _options?: Configuration): Promise<QuotaSpec> {
        const result = this.api.getQuotaSpec(specName, region, namespace, index, wait, stale, prefix, xNomadToken, perPage, nextToken, _options);
        return result.toPromise();
    }

    /**
     * @param region Filters results based on the specified region.
     * @param namespace Filters results based on the specified namespace.
     * @param index If set, wait until query exceeds given index. Must be provided with WaitParam.
     * @param wait Provided with IndexParam to wait for change.
     * @param stale If present, results will include stale reads.
     * @param prefix Constrains results to jobs that start with the defined prefix
     * @param xNomadToken A Nomad ACL token.
     * @param perPage Maximum number of results to return.
     * @param nextToken Indicates where to start paging for queries that support pagination.
     */
    public getQuotas(region?: string, namespace?: string, index?: number, wait?: string, stale?: string, prefix?: string, xNomadToken?: string, perPage?: number, nextToken?: string, _options?: Configuration): Promise<Array<AnyType>> {
        const result = this.api.getQuotas(region, namespace, index, wait, stale, prefix, xNomadToken, perPage, nextToken, _options);
        return result.toPromise();
    }

    /**
     * @param specName The quota spec identifier.
     * @param quotaSpec 
     * @param region Filters results based on the specified region.
     * @param namespace Filters results based on the specified namespace.
     * @param xNomadToken A Nomad ACL token.
     * @param idempotencyToken Can be used to ensure operations are only run once.
     */
    public postQuotaSpec(specName: string, quotaSpec: QuotaSpec, region?: string, namespace?: string, xNomadToken?: string, idempotencyToken?: string, _options?: Configuration): Promise<void> {
        const result = this.api.postQuotaSpec(specName, quotaSpec, region, namespace, xNomadToken, idempotencyToken, _options);
        return result.toPromise();
    }


}



import { ObservableJobsApi } from './ObservableAPI';

import { JobsApiRequestFactory, JobsApiResponseProcessor} from "../apis/JobsApi";
export class PromiseJobsApi {
    private api: ObservableJobsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: JobsApiRequestFactory,
        responseProcessor?: JobsApiResponseProcessor
    ) {
        this.api = new ObservableJobsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param jobName The job identifier.
     * @param region Filters results based on the specified region.
     * @param namespace Filters results based on the specified namespace.
     * @param xNomadToken A Nomad ACL token.
     * @param idempotencyToken Can be used to ensure operations are only run once.
     * @param purge Boolean flag indicating whether to purge allocations of the job after deleting.
     * @param global Boolean flag indicating whether the operation should apply to all instances of the job globally.
     */
    public deleteJob(jobName: string, region?: string, namespace?: string, xNomadToken?: string, idempotencyToken?: string, purge?: boolean, global?: boolean, _options?: Configuration): Promise<JobDeregisterResponse> {
        const result = this.api.deleteJob(jobName, region, namespace, xNomadToken, idempotencyToken, purge, global, _options);
        return result.toPromise();
    }

    /**
     * @param jobName The job identifier.
     * @param region Filters results based on the specified region.
     * @param namespace Filters results based on the specified namespace.
     * @param index If set, wait until query exceeds given index. Must be provided with WaitParam.
     * @param wait Provided with IndexParam to wait for change.
     * @param stale If present, results will include stale reads.
     * @param prefix Constrains results to jobs that start with the defined prefix
     * @param xNomadToken A Nomad ACL token.
     * @param perPage Maximum number of results to return.
     * @param nextToken Indicates where to start paging for queries that support pagination.
     */
    public getJob(jobName: string, region?: string, namespace?: string, index?: number, wait?: string, stale?: string, prefix?: string, xNomadToken?: string, perPage?: number, nextToken?: string, _options?: Configuration): Promise<Job> {
        const result = this.api.getJob(jobName, region, namespace, index, wait, stale, prefix, xNomadToken, perPage, nextToken, _options);
        return result.toPromise();
    }

    /**
     * @param jobName The job identifier.
     * @param region Filters results based on the specified region.
     * @param namespace Filters results based on the specified namespace.
     * @param index If set, wait until query exceeds given index. Must be provided with WaitParam.
     * @param wait Provided with IndexParam to wait for change.
     * @param stale If present, results will include stale reads.
     * @param prefix Constrains results to jobs that start with the defined prefix
     * @param xNomadToken A Nomad ACL token.
     * @param perPage Maximum number of results to return.
     * @param nextToken Indicates where to start paging for queries that support pagination.
     * @param all Specifies whether the list of allocations should include allocations from a previously registered job with the same ID. This is possible if the job is deregistered and reregistered.
     */
    public getJobAllocations(jobName: string, region?: string, namespace?: string, index?: number, wait?: string, stale?: string, prefix?: string, xNomadToken?: string, perPage?: number, nextToken?: string, all?: boolean, _options?: Configuration): Promise<Array<AllocationListStub>> {
        const result = this.api.getJobAllocations(jobName, region, namespace, index, wait, stale, prefix, xNomadToken, perPage, nextToken, all, _options);
        return result.toPromise();
    }

    /**
     * @param jobName The job identifier.
     * @param region Filters results based on the specified region.
     * @param namespace Filters results based on the specified namespace.
     * @param index If set, wait until query exceeds given index. Must be provided with WaitParam.
     * @param wait Provided with IndexParam to wait for change.
     * @param stale If present, results will include stale reads.
     * @param prefix Constrains results to jobs that start with the defined prefix
     * @param xNomadToken A Nomad ACL token.
     * @param perPage Maximum number of results to return.
     * @param nextToken Indicates where to start paging for queries that support pagination.
     */
    public getJobDeployment(jobName: string, region?: string, namespace?: string, index?: number, wait?: string, stale?: string, prefix?: string, xNomadToken?: string, perPage?: number, nextToken?: string, _options?: Configuration): Promise<Deployment> {
        const result = this.api.getJobDeployment(jobName, region, namespace, index, wait, stale, prefix, xNomadToken, perPage, nextToken, _options);
        return result.toPromise();
    }

    /**
     * @param jobName The job identifier.
     * @param region Filters results based on the specified region.
     * @param namespace Filters results based on the specified namespace.
     * @param index If set, wait until query exceeds given index. Must be provided with WaitParam.
     * @param wait Provided with IndexParam to wait for change.
     * @param stale If present, results will include stale reads.
     * @param prefix Constrains results to jobs that start with the defined prefix
     * @param xNomadToken A Nomad ACL token.
     * @param perPage Maximum number of results to return.
     * @param nextToken Indicates where to start paging for queries that support pagination.
     * @param all Flag indicating whether to constrain by job creation index or not.
     */
    public getJobDeployments(jobName: string, region?: string, namespace?: string, index?: number, wait?: string, stale?: string, prefix?: string, xNomadToken?: string, perPage?: number, nextToken?: string, all?: number, _options?: Configuration): Promise<Array<Deployment>> {
        const result = this.api.getJobDeployments(jobName, region, namespace, index, wait, stale, prefix, xNomadToken, perPage, nextToken, all, _options);
        return result.toPromise();
    }

    /**
     * @param jobName The job identifier.
     * @param region Filters results based on the specified region.
     * @param namespace Filters results based on the specified namespace.
     * @param index If set, wait until query exceeds given index. Must be provided with WaitParam.
     * @param wait Provided with IndexParam to wait for change.
     * @param stale If present, results will include stale reads.
     * @param prefix Constrains results to jobs that start with the defined prefix
     * @param xNomadToken A Nomad ACL token.
     * @param perPage Maximum number of results to return.
     * @param nextToken Indicates where to start paging for queries that support pagination.
     */
    public getJobEvaluations(jobName: string, region?: string, namespace?: string, index?: number, wait?: string, stale?: string, prefix?: string, xNomadToken?: string, perPage?: number, nextToken?: string, _options?: Configuration): Promise<Array<Evaluation>> {
        const result = this.api.getJobEvaluations(jobName, region, namespace, index, wait, stale, prefix, xNomadToken, perPage, nextToken, _options);
        return result.toPromise();
    }

    /**
     * @param jobName The job identifier.
     * @param region Filters results based on the specified region.
     * @param namespace Filters results based on the specified namespace.
     * @param index If set, wait until query exceeds given index. Must be provided with WaitParam.
     * @param wait Provided with IndexParam to wait for change.
     * @param stale If present, results will include stale reads.
     * @param prefix Constrains results to jobs that start with the defined prefix
     * @param xNomadToken A Nomad ACL token.
     * @param perPage Maximum number of results to return.
     * @param nextToken Indicates where to start paging for queries that support pagination.
     */
    public getJobScaleStatus(jobName: string, region?: string, namespace?: string, index?: number, wait?: string, stale?: string, prefix?: string, xNomadToken?: string, perPage?: number, nextToken?: string, _options?: Configuration): Promise<JobScaleStatusResponse> {
        const result = this.api.getJobScaleStatus(jobName, region, namespace, index, wait, stale, prefix, xNomadToken, perPage, nextToken, _options);
        return result.toPromise();
    }

    /**
     * @param jobName The job identifier.
     * @param region Filters results based on the specified region.
     * @param namespace Filters results based on the specified namespace.
     * @param index If set, wait until query exceeds given index. Must be provided with WaitParam.
     * @param wait Provided with IndexParam to wait for change.
     * @param stale If present, results will include stale reads.
     * @param prefix Constrains results to jobs that start with the defined prefix
     * @param xNomadToken A Nomad ACL token.
     * @param perPage Maximum number of results to return.
     * @param nextToken Indicates where to start paging for queries that support pagination.
     */
    public getJobSummary(jobName: string, region?: string, namespace?: string, index?: number, wait?: string, stale?: string, prefix?: string, xNomadToken?: string, perPage?: number, nextToken?: string, _options?: Configuration): Promise<JobSummary> {
        const result = this.api.getJobSummary(jobName, region, namespace, index, wait, stale, prefix, xNomadToken, perPage, nextToken, _options);
        return result.toPromise();
    }

    /**
     * @param jobName The job identifier.
     * @param region Filters results based on the specified region.
     * @param namespace Filters results based on the specified namespace.
     * @param index If set, wait until query exceeds given index. Must be provided with WaitParam.
     * @param wait Provided with IndexParam to wait for change.
     * @param stale If present, results will include stale reads.
     * @param prefix Constrains results to jobs that start with the defined prefix
     * @param xNomadToken A Nomad ACL token.
     * @param perPage Maximum number of results to return.
     * @param nextToken Indicates where to start paging for queries that support pagination.
     * @param diffs Boolean flag indicating whether to compute job diffs.
     */
    public getJobVersions(jobName: string, region?: string, namespace?: string, index?: number, wait?: string, stale?: string, prefix?: string, xNomadToken?: string, perPage?: number, nextToken?: string, diffs?: boolean, _options?: Configuration): Promise<JobVersionsResponse> {
        const result = this.api.getJobVersions(jobName, region, namespace, index, wait, stale, prefix, xNomadToken, perPage, nextToken, diffs, _options);
        return result.toPromise();
    }

    /**
     * @param region Filters results based on the specified region.
     * @param namespace Filters results based on the specified namespace.
     * @param index If set, wait until query exceeds given index. Must be provided with WaitParam.
     * @param wait Provided with IndexParam to wait for change.
     * @param stale If present, results will include stale reads.
     * @param prefix Constrains results to jobs that start with the defined prefix
     * @param xNomadToken A Nomad ACL token.
     * @param perPage Maximum number of results to return.
     * @param nextToken Indicates where to start paging for queries that support pagination.
     */
    public getJobs(region?: string, namespace?: string, index?: number, wait?: string, stale?: string, prefix?: string, xNomadToken?: string, perPage?: number, nextToken?: string, _options?: Configuration): Promise<Array<JobListStub>> {
        const result = this.api.getJobs(region, namespace, index, wait, stale, prefix, xNomadToken, perPage, nextToken, _options);
        return result.toPromise();
    }

    /**
     * @param jobName The job identifier.
     * @param jobRegisterRequest 
     * @param region Filters results based on the specified region.
     * @param namespace Filters results based on the specified namespace.
     * @param xNomadToken A Nomad ACL token.
     * @param idempotencyToken Can be used to ensure operations are only run once.
     */
    public postJob(jobName: string, jobRegisterRequest: JobRegisterRequest, region?: string, namespace?: string, xNomadToken?: string, idempotencyToken?: string, _options?: Configuration): Promise<JobRegisterResponse> {
        const result = this.api.postJob(jobName, jobRegisterRequest, region, namespace, xNomadToken, idempotencyToken, _options);
        return result.toPromise();
    }

    /**
     * @param jobName The job identifier.
     * @param jobDispatchRequest 
     * @param region Filters results based on the specified region.
     * @param namespace Filters results based on the specified namespace.
     * @param xNomadToken A Nomad ACL token.
     * @param idempotencyToken Can be used to ensure operations are only run once.
     */
    public postJobDispatch(jobName: string, jobDispatchRequest: JobDispatchRequest, region?: string, namespace?: string, xNomadToken?: string, idempotencyToken?: string, _options?: Configuration): Promise<JobDispatchResponse> {
        const result = this.api.postJobDispatch(jobName, jobDispatchRequest, region, namespace, xNomadToken, idempotencyToken, _options);
        return result.toPromise();
    }

    /**
     * @param jobName The job identifier.
     * @param jobEvaluateRequest 
     * @param region Filters results based on the specified region.
     * @param namespace Filters results based on the specified namespace.
     * @param xNomadToken A Nomad ACL token.
     * @param idempotencyToken Can be used to ensure operations are only run once.
     */
    public postJobEvaluate(jobName: string, jobEvaluateRequest: JobEvaluateRequest, region?: string, namespace?: string, xNomadToken?: string, idempotencyToken?: string, _options?: Configuration): Promise<JobRegisterResponse> {
        const result = this.api.postJobEvaluate(jobName, jobEvaluateRequest, region, namespace, xNomadToken, idempotencyToken, _options);
        return result.toPromise();
    }

    /**
     * @param jobsParseRequest 
     */
    public postJobParse(jobsParseRequest: JobsParseRequest, _options?: Configuration): Promise<Job> {
        const result = this.api.postJobParse(jobsParseRequest, _options);
        return result.toPromise();
    }

    /**
     * @param jobName The job identifier.
     * @param region Filters results based on the specified region.
     * @param namespace Filters results based on the specified namespace.
     * @param xNomadToken A Nomad ACL token.
     * @param idempotencyToken Can be used to ensure operations are only run once.
     */
    public postJobPeriodicForce(jobName: string, region?: string, namespace?: string, xNomadToken?: string, idempotencyToken?: string, _options?: Configuration): Promise<PeriodicForceResponse> {
        const result = this.api.postJobPeriodicForce(jobName, region, namespace, xNomadToken, idempotencyToken, _options);
        return result.toPromise();
    }

    /**
     * @param jobName The job identifier.
     * @param jobPlanRequest 
     * @param region Filters results based on the specified region.
     * @param namespace Filters results based on the specified namespace.
     * @param xNomadToken A Nomad ACL token.
     * @param idempotencyToken Can be used to ensure operations are only run once.
     */
    public postJobPlan(jobName: string, jobPlanRequest: JobPlanRequest, region?: string, namespace?: string, xNomadToken?: string, idempotencyToken?: string, _options?: Configuration): Promise<JobPlanResponse> {
        const result = this.api.postJobPlan(jobName, jobPlanRequest, region, namespace, xNomadToken, idempotencyToken, _options);
        return result.toPromise();
    }

    /**
     * @param jobName The job identifier.
     * @param jobRevertRequest 
     * @param region Filters results based on the specified region.
     * @param namespace Filters results based on the specified namespace.
     * @param xNomadToken A Nomad ACL token.
     * @param idempotencyToken Can be used to ensure operations are only run once.
     */
    public postJobRevert(jobName: string, jobRevertRequest: JobRevertRequest, region?: string, namespace?: string, xNomadToken?: string, idempotencyToken?: string, _options?: Configuration): Promise<JobRegisterResponse> {
        const result = this.api.postJobRevert(jobName, jobRevertRequest, region, namespace, xNomadToken, idempotencyToken, _options);
        return result.toPromise();
    }

    /**
     * @param jobName The job identifier.
     * @param scalingRequest 
     * @param region Filters results based on the specified region.
     * @param namespace Filters results based on the specified namespace.
     * @param xNomadToken A Nomad ACL token.
     * @param idempotencyToken Can be used to ensure operations are only run once.
     */
    public postJobScalingRequest(jobName: string, scalingRequest: ScalingRequest, region?: string, namespace?: string, xNomadToken?: string, idempotencyToken?: string, _options?: Configuration): Promise<JobRegisterResponse> {
        const result = this.api.postJobScalingRequest(jobName, scalingRequest, region, namespace, xNomadToken, idempotencyToken, _options);
        return result.toPromise();
    }

    /**
     * @param jobName The job identifier.
     * @param jobStabilityRequest 
     * @param region Filters results based on the specified region.
     * @param namespace Filters results based on the specified namespace.
     * @param xNomadToken A Nomad ACL token.
     * @param idempotencyToken Can be used to ensure operations are only run once.
     */
    public postJobStability(jobName: string, jobStabilityRequest: JobStabilityRequest, region?: string, namespace?: string, xNomadToken?: string, idempotencyToken?: string, _options?: Configuration): Promise<JobStabilityResponse> {
        const result = this.api.postJobStability(jobName, jobStabilityRequest, region, namespace, xNomadToken, idempotencyToken, _options);
        return result.toPromise();
    }

    /**
     * @param jobValidateRequest 
     * @param region Filters results based on the specified region.
     * @param namespace Filters results based on the specified namespace.
     * @param xNomadToken A Nomad ACL token.
     * @param idempotencyToken Can be used to ensure operations are only run once.
     */
    public postJobValidateRequest(jobValidateRequest: JobValidateRequest, region?: string, namespace?: string, xNomadToken?: string, idempotencyToken?: string, _options?: Configuration): Promise<JobValidateResponse> {
        const result = this.api.postJobValidateRequest(jobValidateRequest, region, namespace, xNomadToken, idempotencyToken, _options);
        return result.toPromise();
    }

    /**
     * @param jobRegisterRequest 
     * @param region Filters results based on the specified region.
     * @param namespace Filters results based on the specified namespace.
     * @param xNomadToken A Nomad ACL token.
     * @param idempotencyToken Can be used to ensure operations are only run once.
     */
    public registerJob(jobRegisterRequest: JobRegisterRequest, region?: string, namespace?: string, xNomadToken?: string, idempotencyToken?: string, _options?: Configuration): Promise<JobRegisterResponse> {
        const result = this.api.registerJob(jobRegisterRequest, region, namespace, xNomadToken, idempotencyToken, _options);
        return result.toPromise();
    }


}



import { ObservableMetricsApi } from './ObservableAPI';

import { MetricsApiRequestFactory, MetricsApiResponseProcessor} from "../apis/MetricsApi";
export class PromiseMetricsApi {
    private api: ObservableMetricsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: MetricsApiRequestFactory,
        responseProcessor?: MetricsApiResponseProcessor
    ) {
        this.api = new ObservableMetricsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param format The format the user requested for the metrics summary (e.g. prometheus)
     */
    public getMetricsSummary(format?: string, _options?: Configuration): Promise<MetricsSummary> {
        const result = this.api.getMetricsSummary(format, _options);
        return result.toPromise();
    }


}



import { ObservableNamespacesApi } from './ObservableAPI';

import { NamespacesApiRequestFactory, NamespacesApiResponseProcessor} from "../apis/NamespacesApi";
export class PromiseNamespacesApi {
    private api: ObservableNamespacesApi

    public constructor(
        configuration: Configuration,
        requestFactory?: NamespacesApiRequestFactory,
        responseProcessor?: NamespacesApiResponseProcessor
    ) {
        this.api = new ObservableNamespacesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param region Filters results based on the specified region.
     * @param namespace Filters results based on the specified namespace.
     * @param xNomadToken A Nomad ACL token.
     * @param idempotencyToken Can be used to ensure operations are only run once.
     */
    public createNamespace(region?: string, namespace?: string, xNomadToken?: string, idempotencyToken?: string, _options?: Configuration): Promise<void> {
        const result = this.api.createNamespace(region, namespace, xNomadToken, idempotencyToken, _options);
        return result.toPromise();
    }

    /**
     * @param namespaceName The namespace identifier.
     * @param region Filters results based on the specified region.
     * @param namespace Filters results based on the specified namespace.
     * @param xNomadToken A Nomad ACL token.
     * @param idempotencyToken Can be used to ensure operations are only run once.
     */
    public deleteNamespace(namespaceName: string, region?: string, namespace?: string, xNomadToken?: string, idempotencyToken?: string, _options?: Configuration): Promise<void> {
        const result = this.api.deleteNamespace(namespaceName, region, namespace, xNomadToken, idempotencyToken, _options);
        return result.toPromise();
    }

    /**
     * @param namespaceName The namespace identifier.
     * @param region Filters results based on the specified region.
     * @param namespace Filters results based on the specified namespace.
     * @param index If set, wait until query exceeds given index. Must be provided with WaitParam.
     * @param wait Provided with IndexParam to wait for change.
     * @param stale If present, results will include stale reads.
     * @param prefix Constrains results to jobs that start with the defined prefix
     * @param xNomadToken A Nomad ACL token.
     * @param perPage Maximum number of results to return.
     * @param nextToken Indicates where to start paging for queries that support pagination.
     */
    public getNamespace(namespaceName: string, region?: string, namespace?: string, index?: number, wait?: string, stale?: string, prefix?: string, xNomadToken?: string, perPage?: number, nextToken?: string, _options?: Configuration): Promise<Namespace> {
        const result = this.api.getNamespace(namespaceName, region, namespace, index, wait, stale, prefix, xNomadToken, perPage, nextToken, _options);
        return result.toPromise();
    }

    /**
     * @param region Filters results based on the specified region.
     * @param namespace Filters results based on the specified namespace.
     * @param index If set, wait until query exceeds given index. Must be provided with WaitParam.
     * @param wait Provided with IndexParam to wait for change.
     * @param stale If present, results will include stale reads.
     * @param prefix Constrains results to jobs that start with the defined prefix
     * @param xNomadToken A Nomad ACL token.
     * @param perPage Maximum number of results to return.
     * @param nextToken Indicates where to start paging for queries that support pagination.
     */
    public getNamespaces(region?: string, namespace?: string, index?: number, wait?: string, stale?: string, prefix?: string, xNomadToken?: string, perPage?: number, nextToken?: string, _options?: Configuration): Promise<Array<Namespace>> {
        const result = this.api.getNamespaces(region, namespace, index, wait, stale, prefix, xNomadToken, perPage, nextToken, _options);
        return result.toPromise();
    }

    /**
     * @param namespaceName The namespace identifier.
     * @param namespace2 
     * @param region Filters results based on the specified region.
     * @param namespace Filters results based on the specified namespace.
     * @param xNomadToken A Nomad ACL token.
     * @param idempotencyToken Can be used to ensure operations are only run once.
     */
    public postNamespace(namespaceName: string, namespace2: Namespace, region?: string, namespace?: string, xNomadToken?: string, idempotencyToken?: string, _options?: Configuration): Promise<void> {
        const result = this.api.postNamespace(namespaceName, namespace2, region, namespace, xNomadToken, idempotencyToken, _options);
        return result.toPromise();
    }


}



import { ObservablePluginsApi } from './ObservableAPI';

import { PluginsApiRequestFactory, PluginsApiResponseProcessor} from "../apis/PluginsApi";
export class PromisePluginsApi {
    private api: ObservablePluginsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: PluginsApiRequestFactory,
        responseProcessor?: PluginsApiResponseProcessor
    ) {
        this.api = new ObservablePluginsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param pluginID The CSI plugin identifier.
     * @param region Filters results based on the specified region.
     * @param namespace Filters results based on the specified namespace.
     * @param index If set, wait until query exceeds given index. Must be provided with WaitParam.
     * @param wait Provided with IndexParam to wait for change.
     * @param stale If present, results will include stale reads.
     * @param prefix Constrains results to jobs that start with the defined prefix
     * @param xNomadToken A Nomad ACL token.
     * @param perPage Maximum number of results to return.
     * @param nextToken Indicates where to start paging for queries that support pagination.
     */
    public getPluginCSI(pluginID: string, region?: string, namespace?: string, index?: number, wait?: string, stale?: string, prefix?: string, xNomadToken?: string, perPage?: number, nextToken?: string, _options?: Configuration): Promise<Array<CSIPlugin>> {
        const result = this.api.getPluginCSI(pluginID, region, namespace, index, wait, stale, prefix, xNomadToken, perPage, nextToken, _options);
        return result.toPromise();
    }

    /**
     * @param region Filters results based on the specified region.
     * @param namespace Filters results based on the specified namespace.
     * @param index If set, wait until query exceeds given index. Must be provided with WaitParam.
     * @param wait Provided with IndexParam to wait for change.
     * @param stale If present, results will include stale reads.
     * @param prefix Constrains results to jobs that start with the defined prefix
     * @param xNomadToken A Nomad ACL token.
     * @param perPage Maximum number of results to return.
     * @param nextToken Indicates where to start paging for queries that support pagination.
     */
    public getPlugins(region?: string, namespace?: string, index?: number, wait?: string, stale?: string, prefix?: string, xNomadToken?: string, perPage?: number, nextToken?: string, _options?: Configuration): Promise<Array<CSIPluginListStub>> {
        const result = this.api.getPlugins(region, namespace, index, wait, stale, prefix, xNomadToken, perPage, nextToken, _options);
        return result.toPromise();
    }


}



import { ObservableRegionsApi } from './ObservableAPI';

import { RegionsApiRequestFactory, RegionsApiResponseProcessor} from "../apis/RegionsApi";
export class PromiseRegionsApi {
    private api: ObservableRegionsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: RegionsApiRequestFactory,
        responseProcessor?: RegionsApiResponseProcessor
    ) {
        this.api = new ObservableRegionsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     */
    public getRegions(_options?: Configuration): Promise<Array<string>> {
        const result = this.api.getRegions(_options);
        return result.toPromise();
    }


}



import { ObservableScalingApi } from './ObservableAPI';

import { ScalingApiRequestFactory, ScalingApiResponseProcessor} from "../apis/ScalingApi";
export class PromiseScalingApi {
    private api: ObservableScalingApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ScalingApiRequestFactory,
        responseProcessor?: ScalingApiResponseProcessor
    ) {
        this.api = new ObservableScalingApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param region Filters results based on the specified region.
     * @param namespace Filters results based on the specified namespace.
     * @param index If set, wait until query exceeds given index. Must be provided with WaitParam.
     * @param wait Provided with IndexParam to wait for change.
     * @param stale If present, results will include stale reads.
     * @param prefix Constrains results to jobs that start with the defined prefix
     * @param xNomadToken A Nomad ACL token.
     * @param perPage Maximum number of results to return.
     * @param nextToken Indicates where to start paging for queries that support pagination.
     */
    public getScalingPolicies(region?: string, namespace?: string, index?: number, wait?: string, stale?: string, prefix?: string, xNomadToken?: string, perPage?: number, nextToken?: string, _options?: Configuration): Promise<Array<ScalingPolicyListStub>> {
        const result = this.api.getScalingPolicies(region, namespace, index, wait, stale, prefix, xNomadToken, perPage, nextToken, _options);
        return result.toPromise();
    }

    /**
     * @param policyID The scaling policy identifier.
     * @param region Filters results based on the specified region.
     * @param namespace Filters results based on the specified namespace.
     * @param index If set, wait until query exceeds given index. Must be provided with WaitParam.
     * @param wait Provided with IndexParam to wait for change.
     * @param stale If present, results will include stale reads.
     * @param prefix Constrains results to jobs that start with the defined prefix
     * @param xNomadToken A Nomad ACL token.
     * @param perPage Maximum number of results to return.
     * @param nextToken Indicates where to start paging for queries that support pagination.
     */
    public getScalingPolicy(policyID: string, region?: string, namespace?: string, index?: number, wait?: string, stale?: string, prefix?: string, xNomadToken?: string, perPage?: number, nextToken?: string, _options?: Configuration): Promise<ScalingPolicy> {
        const result = this.api.getScalingPolicy(policyID, region, namespace, index, wait, stale, prefix, xNomadToken, perPage, nextToken, _options);
        return result.toPromise();
    }


}



import { ObservableSearchApi } from './ObservableAPI';

import { SearchApiRequestFactory, SearchApiResponseProcessor} from "../apis/SearchApi";
export class PromiseSearchApi {
    private api: ObservableSearchApi

    public constructor(
        configuration: Configuration,
        requestFactory?: SearchApiRequestFactory,
        responseProcessor?: SearchApiResponseProcessor
    ) {
        this.api = new ObservableSearchApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param fuzzySearchRequest 
     * @param region Filters results based on the specified region.
     * @param namespace Filters results based on the specified namespace.
     * @param index If set, wait until query exceeds given index. Must be provided with WaitParam.
     * @param wait Provided with IndexParam to wait for change.
     * @param stale If present, results will include stale reads.
     * @param prefix Constrains results to jobs that start with the defined prefix
     * @param xNomadToken A Nomad ACL token.
     * @param perPage Maximum number of results to return.
     * @param nextToken Indicates where to start paging for queries that support pagination.
     */
    public getFuzzySearch(fuzzySearchRequest: FuzzySearchRequest, region?: string, namespace?: string, index?: number, wait?: string, stale?: string, prefix?: string, xNomadToken?: string, perPage?: number, nextToken?: string, _options?: Configuration): Promise<FuzzySearchResponse> {
        const result = this.api.getFuzzySearch(fuzzySearchRequest, region, namespace, index, wait, stale, prefix, xNomadToken, perPage, nextToken, _options);
        return result.toPromise();
    }

    /**
     * @param searchRequest 
     * @param region Filters results based on the specified region.
     * @param namespace Filters results based on the specified namespace.
     * @param index If set, wait until query exceeds given index. Must be provided with WaitParam.
     * @param wait Provided with IndexParam to wait for change.
     * @param stale If present, results will include stale reads.
     * @param prefix Constrains results to jobs that start with the defined prefix
     * @param xNomadToken A Nomad ACL token.
     * @param perPage Maximum number of results to return.
     * @param nextToken Indicates where to start paging for queries that support pagination.
     */
    public getSearch(searchRequest: SearchRequest, region?: string, namespace?: string, index?: number, wait?: string, stale?: string, prefix?: string, xNomadToken?: string, perPage?: number, nextToken?: string, _options?: Configuration): Promise<SearchResponse> {
        const result = this.api.getSearch(searchRequest, region, namespace, index, wait, stale, prefix, xNomadToken, perPage, nextToken, _options);
        return result.toPromise();
    }


}



import { ObservableSystemApi } from './ObservableAPI';

import { SystemApiRequestFactory, SystemApiResponseProcessor} from "../apis/SystemApi";
export class PromiseSystemApi {
    private api: ObservableSystemApi

    public constructor(
        configuration: Configuration,
        requestFactory?: SystemApiRequestFactory,
        responseProcessor?: SystemApiResponseProcessor
    ) {
        this.api = new ObservableSystemApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param region Filters results based on the specified region.
     * @param namespace Filters results based on the specified namespace.
     * @param xNomadToken A Nomad ACL token.
     * @param idempotencyToken Can be used to ensure operations are only run once.
     */
    public putSystemGC(region?: string, namespace?: string, xNomadToken?: string, idempotencyToken?: string, _options?: Configuration): Promise<void> {
        const result = this.api.putSystemGC(region, namespace, xNomadToken, idempotencyToken, _options);
        return result.toPromise();
    }

    /**
     * @param region Filters results based on the specified region.
     * @param namespace Filters results based on the specified namespace.
     * @param xNomadToken A Nomad ACL token.
     * @param idempotencyToken Can be used to ensure operations are only run once.
     */
    public putSystemReconcileSummaries(region?: string, namespace?: string, xNomadToken?: string, idempotencyToken?: string, _options?: Configuration): Promise<void> {
        const result = this.api.putSystemReconcileSummaries(region, namespace, xNomadToken, idempotencyToken, _options);
        return result.toPromise();
    }


}



import { ObservableVolumesApi } from './ObservableAPI';

import { VolumesApiRequestFactory, VolumesApiResponseProcessor} from "../apis/VolumesApi";
export class PromiseVolumesApi {
    private api: ObservableVolumesApi

    public constructor(
        configuration: Configuration,
        requestFactory?: VolumesApiRequestFactory,
        responseProcessor?: VolumesApiResponseProcessor
    ) {
        this.api = new ObservableVolumesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param volumeId Volume unique identifier.
     * @param action The action to perform on the Volume (create, detach, delete).
     * @param cSIVolumeCreateRequest 
     * @param region Filters results based on the specified region.
     * @param namespace Filters results based on the specified namespace.
     * @param xNomadToken A Nomad ACL token.
     * @param idempotencyToken Can be used to ensure operations are only run once.
     */
    public createVolume(volumeId: string, action: string, cSIVolumeCreateRequest: CSIVolumeCreateRequest, region?: string, namespace?: string, xNomadToken?: string, idempotencyToken?: string, _options?: Configuration): Promise<void> {
        const result = this.api.createVolume(volumeId, action, cSIVolumeCreateRequest, region, namespace, xNomadToken, idempotencyToken, _options);
        return result.toPromise();
    }

    /**
     * @param region Filters results based on the specified region.
     * @param namespace Filters results based on the specified namespace.
     * @param xNomadToken A Nomad ACL token.
     * @param idempotencyToken Can be used to ensure operations are only run once.
     * @param pluginId Filters volume lists by plugin ID.
     * @param snapshotId The ID of the snapshot to target.
     */
    public deleteSnapshot(region?: string, namespace?: string, xNomadToken?: string, idempotencyToken?: string, pluginId?: string, snapshotId?: string, _options?: Configuration): Promise<void> {
        const result = this.api.deleteSnapshot(region, namespace, xNomadToken, idempotencyToken, pluginId, snapshotId, _options);
        return result.toPromise();
    }

    /**
     * @param volumeId Volume unique identifier.
     * @param region Filters results based on the specified region.
     * @param namespace Filters results based on the specified namespace.
     * @param xNomadToken A Nomad ACL token.
     * @param idempotencyToken Can be used to ensure operations are only run once.
     * @param force Used to force the de-registration of a volume.
     */
    public deleteVolumeRegistration(volumeId: string, region?: string, namespace?: string, xNomadToken?: string, idempotencyToken?: string, force?: string, _options?: Configuration): Promise<void> {
        const result = this.api.deleteVolumeRegistration(volumeId, region, namespace, xNomadToken, idempotencyToken, force, _options);
        return result.toPromise();
    }

    /**
     * @param volumeId Volume unique identifier.
     * @param action The action to perform on the Volume (create, detach, delete).
     * @param region Filters results based on the specified region.
     * @param namespace Filters results based on the specified namespace.
     * @param xNomadToken A Nomad ACL token.
     * @param idempotencyToken Can be used to ensure operations are only run once.
     * @param node Specifies node to target volume operation for.
     */
    public detachOrDeleteVolume(volumeId: string, action: string, region?: string, namespace?: string, xNomadToken?: string, idempotencyToken?: string, node?: string, _options?: Configuration): Promise<void> {
        const result = this.api.detachOrDeleteVolume(volumeId, action, region, namespace, xNomadToken, idempotencyToken, node, _options);
        return result.toPromise();
    }

    /**
     * @param region Filters results based on the specified region.
     * @param namespace Filters results based on the specified namespace.
     * @param index If set, wait until query exceeds given index. Must be provided with WaitParam.
     * @param wait Provided with IndexParam to wait for change.
     * @param stale If present, results will include stale reads.
     * @param prefix Constrains results to jobs that start with the defined prefix
     * @param xNomadToken A Nomad ACL token.
     * @param perPage Maximum number of results to return.
     * @param nextToken Indicates where to start paging for queries that support pagination.
     * @param pluginId Filters volume lists by plugin ID.
     */
    public getExternalVolumes(region?: string, namespace?: string, index?: number, wait?: string, stale?: string, prefix?: string, xNomadToken?: string, perPage?: number, nextToken?: string, pluginId?: string, _options?: Configuration): Promise<CSIVolumeListExternalResponse> {
        const result = this.api.getExternalVolumes(region, namespace, index, wait, stale, prefix, xNomadToken, perPage, nextToken, pluginId, _options);
        return result.toPromise();
    }

    /**
     * @param region Filters results based on the specified region.
     * @param namespace Filters results based on the specified namespace.
     * @param index If set, wait until query exceeds given index. Must be provided with WaitParam.
     * @param wait Provided with IndexParam to wait for change.
     * @param stale If present, results will include stale reads.
     * @param prefix Constrains results to jobs that start with the defined prefix
     * @param xNomadToken A Nomad ACL token.
     * @param perPage Maximum number of results to return.
     * @param nextToken Indicates where to start paging for queries that support pagination.
     * @param pluginId Filters volume lists by plugin ID.
     */
    public getSnapshots(region?: string, namespace?: string, index?: number, wait?: string, stale?: string, prefix?: string, xNomadToken?: string, perPage?: number, nextToken?: string, pluginId?: string, _options?: Configuration): Promise<CSISnapshotListResponse> {
        const result = this.api.getSnapshots(region, namespace, index, wait, stale, prefix, xNomadToken, perPage, nextToken, pluginId, _options);
        return result.toPromise();
    }

    /**
     * @param volumeId Volume unique identifier.
     * @param region Filters results based on the specified region.
     * @param namespace Filters results based on the specified namespace.
     * @param index If set, wait until query exceeds given index. Must be provided with WaitParam.
     * @param wait Provided with IndexParam to wait for change.
     * @param stale If present, results will include stale reads.
     * @param prefix Constrains results to jobs that start with the defined prefix
     * @param xNomadToken A Nomad ACL token.
     * @param perPage Maximum number of results to return.
     * @param nextToken Indicates where to start paging for queries that support pagination.
     */
    public getVolume(volumeId: string, region?: string, namespace?: string, index?: number, wait?: string, stale?: string, prefix?: string, xNomadToken?: string, perPage?: number, nextToken?: string, _options?: Configuration): Promise<CSIVolume> {
        const result = this.api.getVolume(volumeId, region, namespace, index, wait, stale, prefix, xNomadToken, perPage, nextToken, _options);
        return result.toPromise();
    }

    /**
     * @param region Filters results based on the specified region.
     * @param namespace Filters results based on the specified namespace.
     * @param index If set, wait until query exceeds given index. Must be provided with WaitParam.
     * @param wait Provided with IndexParam to wait for change.
     * @param stale If present, results will include stale reads.
     * @param prefix Constrains results to jobs that start with the defined prefix
     * @param xNomadToken A Nomad ACL token.
     * @param perPage Maximum number of results to return.
     * @param nextToken Indicates where to start paging for queries that support pagination.
     * @param nodeId Filters volume lists by node ID.
     * @param pluginId Filters volume lists by plugin ID.
     * @param type Filters volume lists to a specific type.
     */
    public getVolumes(region?: string, namespace?: string, index?: number, wait?: string, stale?: string, prefix?: string, xNomadToken?: string, perPage?: number, nextToken?: string, nodeId?: string, pluginId?: string, type?: string, _options?: Configuration): Promise<Array<CSIVolumeListStub>> {
        const result = this.api.getVolumes(region, namespace, index, wait, stale, prefix, xNomadToken, perPage, nextToken, nodeId, pluginId, type, _options);
        return result.toPromise();
    }

    /**
     * @param cSISnapshotCreateRequest 
     * @param region Filters results based on the specified region.
     * @param namespace Filters results based on the specified namespace.
     * @param xNomadToken A Nomad ACL token.
     * @param idempotencyToken Can be used to ensure operations are only run once.
     */
    public postSnapshot(cSISnapshotCreateRequest: CSISnapshotCreateRequest, region?: string, namespace?: string, xNomadToken?: string, idempotencyToken?: string, _options?: Configuration): Promise<CSISnapshotCreateResponse> {
        const result = this.api.postSnapshot(cSISnapshotCreateRequest, region, namespace, xNomadToken, idempotencyToken, _options);
        return result.toPromise();
    }

    /**
     * @param cSIVolumeRegisterRequest 
     * @param region Filters results based on the specified region.
     * @param namespace Filters results based on the specified namespace.
     * @param xNomadToken A Nomad ACL token.
     * @param idempotencyToken Can be used to ensure operations are only run once.
     */
    public postVolume(cSIVolumeRegisterRequest: CSIVolumeRegisterRequest, region?: string, namespace?: string, xNomadToken?: string, idempotencyToken?: string, _options?: Configuration): Promise<void> {
        const result = this.api.postVolume(cSIVolumeRegisterRequest, region, namespace, xNomadToken, idempotencyToken, _options);
        return result.toPromise();
    }

    /**
     * @param volumeId Volume unique identifier.
     * @param cSIVolumeRegisterRequest 
     * @param region Filters results based on the specified region.
     * @param namespace Filters results based on the specified namespace.
     * @param xNomadToken A Nomad ACL token.
     * @param idempotencyToken Can be used to ensure operations are only run once.
     */
    public postVolumeRegistration(volumeId: string, cSIVolumeRegisterRequest: CSIVolumeRegisterRequest, region?: string, namespace?: string, xNomadToken?: string, idempotencyToken?: string, _options?: Configuration): Promise<void> {
        const result = this.api.postVolumeRegistration(volumeId, cSIVolumeRegisterRequest, region, namespace, xNomadToken, idempotencyToken, _options);
        return result.toPromise();
    }


}


