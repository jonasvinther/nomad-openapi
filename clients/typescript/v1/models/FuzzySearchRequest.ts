/**
 * Nomad
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 1.1.4
 * Contact: support@hashicorp.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http';

export class FuzzySearchRequest {
    'allowStale'?: boolean;
    'authToken'?: string;
    'context'?: string;
    'namespace'?: string;
    'nextToken'?: string;
    'params'?: { [key: string]: string; };
    'perPage'?: number;
    'prefix'?: string;
    'region'?: string;
    'text'?: string;
    'waitIndex'?: number;
    'waitTime'?: number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "allowStale",
            "baseName": "AllowStale",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "authToken",
            "baseName": "AuthToken",
            "type": "string",
            "format": ""
        },
        {
            "name": "context",
            "baseName": "Context",
            "type": "string",
            "format": ""
        },
        {
            "name": "namespace",
            "baseName": "Namespace",
            "type": "string",
            "format": ""
        },
        {
            "name": "nextToken",
            "baseName": "NextToken",
            "type": "string",
            "format": ""
        },
        {
            "name": "params",
            "baseName": "Params",
            "type": "{ [key: string]: string; }",
            "format": ""
        },
        {
            "name": "perPage",
            "baseName": "PerPage",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "prefix",
            "baseName": "Prefix",
            "type": "string",
            "format": ""
        },
        {
            "name": "region",
            "baseName": "Region",
            "type": "string",
            "format": ""
        },
        {
            "name": "text",
            "baseName": "Text",
            "type": "string",
            "format": ""
        },
        {
            "name": "waitIndex",
            "baseName": "WaitIndex",
            "type": "number",
            "format": ""
        },
        {
            "name": "waitTime",
            "baseName": "WaitTime",
            "type": "number",
            "format": "int64"
        }    ];

    static getAttributeTypeMap() {
        return FuzzySearchRequest.attributeTypeMap;
    }
    
    public constructor() {
    }
}

