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

// ConsulGatewayTLSConfig struct for ConsulGatewayTLSConfig
type ConsulGatewayTLSConfig struct {
	Enabled *bool `json:"Enabled,omitempty"`
}

// NewConsulGatewayTLSConfig instantiates a new ConsulGatewayTLSConfig object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewConsulGatewayTLSConfig() *ConsulGatewayTLSConfig {
	this := ConsulGatewayTLSConfig{}
	return &this
}

// NewConsulGatewayTLSConfigWithDefaults instantiates a new ConsulGatewayTLSConfig object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewConsulGatewayTLSConfigWithDefaults() *ConsulGatewayTLSConfig {
	this := ConsulGatewayTLSConfig{}
	return &this
}

// GetEnabled returns the Enabled field value if set, zero value otherwise.
func (o *ConsulGatewayTLSConfig) GetEnabled() bool {
	if o == nil || o.Enabled == nil {
		var ret bool
		return ret
	}
	return *o.Enabled
}

// GetEnabledOk returns a tuple with the Enabled field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ConsulGatewayTLSConfig) GetEnabledOk() (*bool, bool) {
	if o == nil || o.Enabled == nil {
		return nil, false
	}
	return o.Enabled, true
}

// HasEnabled returns a boolean if a field has been set.
func (o *ConsulGatewayTLSConfig) HasEnabled() bool {
	if o != nil && o.Enabled != nil {
		return true
	}

	return false
}

// SetEnabled gets a reference to the given bool and assigns it to the Enabled field.
func (o *ConsulGatewayTLSConfig) SetEnabled(v bool) {
	o.Enabled = &v
}

func (o ConsulGatewayTLSConfig) MarshalJSON() ([]byte, error) {
	toSerialize := map[string]interface{}{}
	if o.Enabled != nil {
		toSerialize["Enabled"] = o.Enabled
	}
	return json.Marshal(toSerialize)
}

type NullableConsulGatewayTLSConfig struct {
	value *ConsulGatewayTLSConfig
	isSet bool
}

func (v NullableConsulGatewayTLSConfig) Get() *ConsulGatewayTLSConfig {
	return v.value
}

func (v *NullableConsulGatewayTLSConfig) Set(val *ConsulGatewayTLSConfig) {
	v.value = val
	v.isSet = true
}

func (v NullableConsulGatewayTLSConfig) IsSet() bool {
	return v.isSet
}

func (v *NullableConsulGatewayTLSConfig) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableConsulGatewayTLSConfig(val *ConsulGatewayTLSConfig) *NullableConsulGatewayTLSConfig {
	return &NullableConsulGatewayTLSConfig{value: val, isSet: true}
}

func (v NullableConsulGatewayTLSConfig) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableConsulGatewayTLSConfig) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

