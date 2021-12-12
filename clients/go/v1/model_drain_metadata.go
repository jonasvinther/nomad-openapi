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
	"time"
)

// DrainMetadata struct for DrainMetadata
type DrainMetadata struct {
	AccessorID *string `json:"AccessorID,omitempty"`
	Meta *map[string]string `json:"Meta,omitempty"`
	StartedAt *time.Time `json:"StartedAt,omitempty"`
	Status *string `json:"Status,omitempty"`
	UpdatedAt *time.Time `json:"UpdatedAt,omitempty"`
}

// NewDrainMetadata instantiates a new DrainMetadata object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewDrainMetadata() *DrainMetadata {
	this := DrainMetadata{}
	return &this
}

// NewDrainMetadataWithDefaults instantiates a new DrainMetadata object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewDrainMetadataWithDefaults() *DrainMetadata {
	this := DrainMetadata{}
	return &this
}

// GetAccessorID returns the AccessorID field value if set, zero value otherwise.
func (o *DrainMetadata) GetAccessorID() string {
	if o == nil || o.AccessorID == nil {
		var ret string
		return ret
	}
	return *o.AccessorID
}

// GetAccessorIDOk returns a tuple with the AccessorID field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *DrainMetadata) GetAccessorIDOk() (*string, bool) {
	if o == nil || o.AccessorID == nil {
		return nil, false
	}
	return o.AccessorID, true
}

// HasAccessorID returns a boolean if a field has been set.
func (o *DrainMetadata) HasAccessorID() bool {
	if o != nil && o.AccessorID != nil {
		return true
	}

	return false
}

// SetAccessorID gets a reference to the given string and assigns it to the AccessorID field.
func (o *DrainMetadata) SetAccessorID(v string) {
	o.AccessorID = &v
}

// GetMeta returns the Meta field value if set, zero value otherwise.
func (o *DrainMetadata) GetMeta() map[string]string {
	if o == nil || o.Meta == nil {
		var ret map[string]string
		return ret
	}
	return *o.Meta
}

// GetMetaOk returns a tuple with the Meta field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *DrainMetadata) GetMetaOk() (*map[string]string, bool) {
	if o == nil || o.Meta == nil {
		return nil, false
	}
	return o.Meta, true
}

// HasMeta returns a boolean if a field has been set.
func (o *DrainMetadata) HasMeta() bool {
	if o != nil && o.Meta != nil {
		return true
	}

	return false
}

// SetMeta gets a reference to the given map[string]string and assigns it to the Meta field.
func (o *DrainMetadata) SetMeta(v map[string]string) {
	o.Meta = &v
}

// GetStartedAt returns the StartedAt field value if set, zero value otherwise.
func (o *DrainMetadata) GetStartedAt() time.Time {
	if o == nil || o.StartedAt == nil {
		var ret time.Time
		return ret
	}
	return *o.StartedAt
}

// GetStartedAtOk returns a tuple with the StartedAt field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *DrainMetadata) GetStartedAtOk() (*time.Time, bool) {
	if o == nil || o.StartedAt == nil {
		return nil, false
	}
	return o.StartedAt, true
}

// HasStartedAt returns a boolean if a field has been set.
func (o *DrainMetadata) HasStartedAt() bool {
	if o != nil && o.StartedAt != nil {
		return true
	}

	return false
}

// SetStartedAt gets a reference to the given time.Time and assigns it to the StartedAt field.
func (o *DrainMetadata) SetStartedAt(v time.Time) {
	o.StartedAt = &v
}

// GetStatus returns the Status field value if set, zero value otherwise.
func (o *DrainMetadata) GetStatus() string {
	if o == nil || o.Status == nil {
		var ret string
		return ret
	}
	return *o.Status
}

// GetStatusOk returns a tuple with the Status field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *DrainMetadata) GetStatusOk() (*string, bool) {
	if o == nil || o.Status == nil {
		return nil, false
	}
	return o.Status, true
}

// HasStatus returns a boolean if a field has been set.
func (o *DrainMetadata) HasStatus() bool {
	if o != nil && o.Status != nil {
		return true
	}

	return false
}

// SetStatus gets a reference to the given string and assigns it to the Status field.
func (o *DrainMetadata) SetStatus(v string) {
	o.Status = &v
}

// GetUpdatedAt returns the UpdatedAt field value if set, zero value otherwise.
func (o *DrainMetadata) GetUpdatedAt() time.Time {
	if o == nil || o.UpdatedAt == nil {
		var ret time.Time
		return ret
	}
	return *o.UpdatedAt
}

// GetUpdatedAtOk returns a tuple with the UpdatedAt field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *DrainMetadata) GetUpdatedAtOk() (*time.Time, bool) {
	if o == nil || o.UpdatedAt == nil {
		return nil, false
	}
	return o.UpdatedAt, true
}

// HasUpdatedAt returns a boolean if a field has been set.
func (o *DrainMetadata) HasUpdatedAt() bool {
	if o != nil && o.UpdatedAt != nil {
		return true
	}

	return false
}

// SetUpdatedAt gets a reference to the given time.Time and assigns it to the UpdatedAt field.
func (o *DrainMetadata) SetUpdatedAt(v time.Time) {
	o.UpdatedAt = &v
}

func (o DrainMetadata) MarshalJSON() ([]byte, error) {
	toSerialize := map[string]interface{}{}
	if o.AccessorID != nil {
		toSerialize["AccessorID"] = o.AccessorID
	}
	if o.Meta != nil {
		toSerialize["Meta"] = o.Meta
	}
	if o.StartedAt != nil {
		toSerialize["StartedAt"] = o.StartedAt
	}
	if o.Status != nil {
		toSerialize["Status"] = o.Status
	}
	if o.UpdatedAt != nil {
		toSerialize["UpdatedAt"] = o.UpdatedAt
	}
	return json.Marshal(toSerialize)
}

type NullableDrainMetadata struct {
	value *DrainMetadata
	isSet bool
}

func (v NullableDrainMetadata) Get() *DrainMetadata {
	return v.value
}

func (v *NullableDrainMetadata) Set(val *DrainMetadata) {
	v.value = val
	v.isSet = true
}

func (v NullableDrainMetadata) IsSet() bool {
	return v.isSet
}

func (v *NullableDrainMetadata) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableDrainMetadata(val *DrainMetadata) *NullableDrainMetadata {
	return &NullableDrainMetadata{value: val, isSet: true}
}

func (v NullableDrainMetadata) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableDrainMetadata) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

