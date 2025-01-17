/*
 * Nomad
 *
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * API version: 1.1.4
 * Contact: support@hashicorp.com
 */

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package client

import (
	"encoding/json"
)

// CSIControllerInfo struct for CSIControllerInfo
type CSIControllerInfo struct {
	SupportsAttachDetach *bool `json:"SupportsAttachDetach,omitempty"`
	SupportsListVolumes *bool `json:"SupportsListVolumes,omitempty"`
	SupportsListVolumesAttachedNodes *bool `json:"SupportsListVolumesAttachedNodes,omitempty"`
	SupportsReadOnlyAttach *bool `json:"SupportsReadOnlyAttach,omitempty"`
}

// NewCSIControllerInfo instantiates a new CSIControllerInfo object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewCSIControllerInfo() *CSIControllerInfo {
	this := CSIControllerInfo{}
	return &this
}

// NewCSIControllerInfoWithDefaults instantiates a new CSIControllerInfo object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewCSIControllerInfoWithDefaults() *CSIControllerInfo {
	this := CSIControllerInfo{}
	return &this
}

// GetSupportsAttachDetach returns the SupportsAttachDetach field value if set, zero value otherwise.
func (o *CSIControllerInfo) GetSupportsAttachDetach() bool {
	if o == nil || o.SupportsAttachDetach == nil {
		var ret bool
		return ret
	}
	return *o.SupportsAttachDetach
}

// GetSupportsAttachDetachOk returns a tuple with the SupportsAttachDetach field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CSIControllerInfo) GetSupportsAttachDetachOk() (*bool, bool) {
	if o == nil || o.SupportsAttachDetach == nil {
		return nil, false
	}
	return o.SupportsAttachDetach, true
}

// HasSupportsAttachDetach returns a boolean if a field has been set.
func (o *CSIControllerInfo) HasSupportsAttachDetach() bool {
	if o != nil && o.SupportsAttachDetach != nil {
		return true
	}

	return false
}

// SetSupportsAttachDetach gets a reference to the given bool and assigns it to the SupportsAttachDetach field.
func (o *CSIControllerInfo) SetSupportsAttachDetach(v bool) {
	o.SupportsAttachDetach = &v
}

// GetSupportsListVolumes returns the SupportsListVolumes field value if set, zero value otherwise.
func (o *CSIControllerInfo) GetSupportsListVolumes() bool {
	if o == nil || o.SupportsListVolumes == nil {
		var ret bool
		return ret
	}
	return *o.SupportsListVolumes
}

// GetSupportsListVolumesOk returns a tuple with the SupportsListVolumes field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CSIControllerInfo) GetSupportsListVolumesOk() (*bool, bool) {
	if o == nil || o.SupportsListVolumes == nil {
		return nil, false
	}
	return o.SupportsListVolumes, true
}

// HasSupportsListVolumes returns a boolean if a field has been set.
func (o *CSIControllerInfo) HasSupportsListVolumes() bool {
	if o != nil && o.SupportsListVolumes != nil {
		return true
	}

	return false
}

// SetSupportsListVolumes gets a reference to the given bool and assigns it to the SupportsListVolumes field.
func (o *CSIControllerInfo) SetSupportsListVolumes(v bool) {
	o.SupportsListVolumes = &v
}

// GetSupportsListVolumesAttachedNodes returns the SupportsListVolumesAttachedNodes field value if set, zero value otherwise.
func (o *CSIControllerInfo) GetSupportsListVolumesAttachedNodes() bool {
	if o == nil || o.SupportsListVolumesAttachedNodes == nil {
		var ret bool
		return ret
	}
	return *o.SupportsListVolumesAttachedNodes
}

// GetSupportsListVolumesAttachedNodesOk returns a tuple with the SupportsListVolumesAttachedNodes field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CSIControllerInfo) GetSupportsListVolumesAttachedNodesOk() (*bool, bool) {
	if o == nil || o.SupportsListVolumesAttachedNodes == nil {
		return nil, false
	}
	return o.SupportsListVolumesAttachedNodes, true
}

// HasSupportsListVolumesAttachedNodes returns a boolean if a field has been set.
func (o *CSIControllerInfo) HasSupportsListVolumesAttachedNodes() bool {
	if o != nil && o.SupportsListVolumesAttachedNodes != nil {
		return true
	}

	return false
}

// SetSupportsListVolumesAttachedNodes gets a reference to the given bool and assigns it to the SupportsListVolumesAttachedNodes field.
func (o *CSIControllerInfo) SetSupportsListVolumesAttachedNodes(v bool) {
	o.SupportsListVolumesAttachedNodes = &v
}

// GetSupportsReadOnlyAttach returns the SupportsReadOnlyAttach field value if set, zero value otherwise.
func (o *CSIControllerInfo) GetSupportsReadOnlyAttach() bool {
	if o == nil || o.SupportsReadOnlyAttach == nil {
		var ret bool
		return ret
	}
	return *o.SupportsReadOnlyAttach
}

// GetSupportsReadOnlyAttachOk returns a tuple with the SupportsReadOnlyAttach field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CSIControllerInfo) GetSupportsReadOnlyAttachOk() (*bool, bool) {
	if o == nil || o.SupportsReadOnlyAttach == nil {
		return nil, false
	}
	return o.SupportsReadOnlyAttach, true
}

// HasSupportsReadOnlyAttach returns a boolean if a field has been set.
func (o *CSIControllerInfo) HasSupportsReadOnlyAttach() bool {
	if o != nil && o.SupportsReadOnlyAttach != nil {
		return true
	}

	return false
}

// SetSupportsReadOnlyAttach gets a reference to the given bool and assigns it to the SupportsReadOnlyAttach field.
func (o *CSIControllerInfo) SetSupportsReadOnlyAttach(v bool) {
	o.SupportsReadOnlyAttach = &v
}

func (o CSIControllerInfo) MarshalJSON() ([]byte, error) {
	toSerialize := map[string]interface{}{}
	if o.SupportsAttachDetach != nil {
		toSerialize["SupportsAttachDetach"] = o.SupportsAttachDetach
	}
	if o.SupportsListVolumes != nil {
		toSerialize["SupportsListVolumes"] = o.SupportsListVolumes
	}
	if o.SupportsListVolumesAttachedNodes != nil {
		toSerialize["SupportsListVolumesAttachedNodes"] = o.SupportsListVolumesAttachedNodes
	}
	if o.SupportsReadOnlyAttach != nil {
		toSerialize["SupportsReadOnlyAttach"] = o.SupportsReadOnlyAttach
	}
	return json.Marshal(toSerialize)
}

type NullableCSIControllerInfo struct {
	value *CSIControllerInfo
	isSet bool
}

func (v NullableCSIControllerInfo) Get() *CSIControllerInfo {
	return v.value
}

func (v *NullableCSIControllerInfo) Set(val *CSIControllerInfo) {
	v.value = val
	v.isSet = true
}

func (v NullableCSIControllerInfo) IsSet() bool {
	return v.isSet
}

func (v *NullableCSIControllerInfo) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableCSIControllerInfo(val *CSIControllerInfo) *NullableCSIControllerInfo {
	return &NullableCSIControllerInfo{value: val, isSet: true}
}

func (v NullableCSIControllerInfo) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableCSIControllerInfo) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


