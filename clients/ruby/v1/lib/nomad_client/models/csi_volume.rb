=begin
#Nomad

#No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)

The version of the OpenAPI document: 1.1.4
Contact: support@hashicorp.com
Generated by: https://openapi-generator.tech
OpenAPI Generator version: 5.2.0

=end

require 'date'
require 'time'

module NomadClient
  class CSIVolume
    attr_accessor :access_mode

    attr_accessor :allocations

    attr_accessor :attachment_mode

    attr_accessor :capacity

    attr_accessor :clone_id

    attr_accessor :context

    attr_accessor :controller_required

    attr_accessor :controllers_expected

    attr_accessor :controllers_healthy

    attr_accessor :create_index

    attr_accessor :external_id

    attr_accessor :id

    attr_accessor :modify_index

    attr_accessor :mount_options

    attr_accessor :name

    attr_accessor :namespace

    attr_accessor :nodes_expected

    attr_accessor :nodes_healthy

    attr_accessor :parameters

    attr_accessor :plugin_id

    attr_accessor :provider

    attr_accessor :provider_version

    attr_accessor :read_allocs

    attr_accessor :requested_capabilities

    attr_accessor :requested_capacity_max

    attr_accessor :requested_capacity_min

    attr_accessor :resource_exhausted

    attr_accessor :schedulable

    attr_accessor :secrets

    attr_accessor :snapshot_id

    attr_accessor :topologies

    attr_accessor :write_allocs

    # Attribute mapping from ruby-style variable name to JSON key.
    def self.attribute_map
      {
        :'access_mode' => :'AccessMode',
        :'allocations' => :'Allocations',
        :'attachment_mode' => :'AttachmentMode',
        :'capacity' => :'Capacity',
        :'clone_id' => :'CloneID',
        :'context' => :'Context',
        :'controller_required' => :'ControllerRequired',
        :'controllers_expected' => :'ControllersExpected',
        :'controllers_healthy' => :'ControllersHealthy',
        :'create_index' => :'CreateIndex',
        :'external_id' => :'ExternalID',
        :'id' => :'ID',
        :'modify_index' => :'ModifyIndex',
        :'mount_options' => :'MountOptions',
        :'name' => :'Name',
        :'namespace' => :'Namespace',
        :'nodes_expected' => :'NodesExpected',
        :'nodes_healthy' => :'NodesHealthy',
        :'parameters' => :'Parameters',
        :'plugin_id' => :'PluginID',
        :'provider' => :'Provider',
        :'provider_version' => :'ProviderVersion',
        :'read_allocs' => :'ReadAllocs',
        :'requested_capabilities' => :'RequestedCapabilities',
        :'requested_capacity_max' => :'RequestedCapacityMax',
        :'requested_capacity_min' => :'RequestedCapacityMin',
        :'resource_exhausted' => :'ResourceExhausted',
        :'schedulable' => :'Schedulable',
        :'secrets' => :'Secrets',
        :'snapshot_id' => :'SnapshotID',
        :'topologies' => :'Topologies',
        :'write_allocs' => :'WriteAllocs'
      }
    end

    # Returns all the JSON keys this model knows about
    def self.acceptable_attributes
      attribute_map.values
    end

    # Attribute type mapping.
    def self.openapi_types
      {
        :'access_mode' => :'String',
        :'allocations' => :'Array<AllocationListStub>',
        :'attachment_mode' => :'String',
        :'capacity' => :'Integer',
        :'clone_id' => :'String',
        :'context' => :'Hash<String, String>',
        :'controller_required' => :'Boolean',
        :'controllers_expected' => :'Integer',
        :'controllers_healthy' => :'Integer',
        :'create_index' => :'Integer',
        :'external_id' => :'String',
        :'id' => :'String',
        :'modify_index' => :'Integer',
        :'mount_options' => :'CSIMountOptions',
        :'name' => :'String',
        :'namespace' => :'String',
        :'nodes_expected' => :'Integer',
        :'nodes_healthy' => :'Integer',
        :'parameters' => :'Hash<String, String>',
        :'plugin_id' => :'String',
        :'provider' => :'String',
        :'provider_version' => :'String',
        :'read_allocs' => :'Hash<String, Allocation>',
        :'requested_capabilities' => :'Array<CSIVolumeCapability>',
        :'requested_capacity_max' => :'Integer',
        :'requested_capacity_min' => :'Integer',
        :'resource_exhausted' => :'Time',
        :'schedulable' => :'Boolean',
        :'secrets' => :'Hash<String, String>',
        :'snapshot_id' => :'String',
        :'topologies' => :'Array<CSITopology>',
        :'write_allocs' => :'Hash<String, Allocation>'
      }
    end

    # List of attributes with nullable: true
    def self.openapi_nullable
      Set.new([
      ])
    end

    # Initializes the object
    # @param [Hash] attributes Model attributes in the form of hash
    def initialize(attributes = {})
      if (!attributes.is_a?(Hash))
        fail ArgumentError, "The input argument (attributes) must be a hash in `NomadClient::CSIVolume` initialize method"
      end

      # check to see if the attribute exists and convert string to symbol for hash key
      attributes = attributes.each_with_object({}) { |(k, v), h|
        if (!self.class.attribute_map.key?(k.to_sym))
          fail ArgumentError, "`#{k}` is not a valid attribute in `NomadClient::CSIVolume`. Please check the name to make sure it's valid. List of attributes: " + self.class.attribute_map.keys.inspect
        end
        h[k.to_sym] = v
      }

      if attributes.key?(:'access_mode')
        self.access_mode = attributes[:'access_mode']
      end

      if attributes.key?(:'allocations')
        if (value = attributes[:'allocations']).is_a?(Array)
          self.allocations = value
        end
      end

      if attributes.key?(:'attachment_mode')
        self.attachment_mode = attributes[:'attachment_mode']
      end

      if attributes.key?(:'capacity')
        self.capacity = attributes[:'capacity']
      end

      if attributes.key?(:'clone_id')
        self.clone_id = attributes[:'clone_id']
      end

      if attributes.key?(:'context')
        if (value = attributes[:'context']).is_a?(Hash)
          self.context = value
        end
      end

      if attributes.key?(:'controller_required')
        self.controller_required = attributes[:'controller_required']
      end

      if attributes.key?(:'controllers_expected')
        self.controllers_expected = attributes[:'controllers_expected']
      end

      if attributes.key?(:'controllers_healthy')
        self.controllers_healthy = attributes[:'controllers_healthy']
      end

      if attributes.key?(:'create_index')
        self.create_index = attributes[:'create_index']
      end

      if attributes.key?(:'external_id')
        self.external_id = attributes[:'external_id']
      end

      if attributes.key?(:'id')
        self.id = attributes[:'id']
      end

      if attributes.key?(:'modify_index')
        self.modify_index = attributes[:'modify_index']
      end

      if attributes.key?(:'mount_options')
        self.mount_options = attributes[:'mount_options']
      end

      if attributes.key?(:'name')
        self.name = attributes[:'name']
      end

      if attributes.key?(:'namespace')
        self.namespace = attributes[:'namespace']
      end

      if attributes.key?(:'nodes_expected')
        self.nodes_expected = attributes[:'nodes_expected']
      end

      if attributes.key?(:'nodes_healthy')
        self.nodes_healthy = attributes[:'nodes_healthy']
      end

      if attributes.key?(:'parameters')
        if (value = attributes[:'parameters']).is_a?(Hash)
          self.parameters = value
        end
      end

      if attributes.key?(:'plugin_id')
        self.plugin_id = attributes[:'plugin_id']
      end

      if attributes.key?(:'provider')
        self.provider = attributes[:'provider']
      end

      if attributes.key?(:'provider_version')
        self.provider_version = attributes[:'provider_version']
      end

      if attributes.key?(:'read_allocs')
        if (value = attributes[:'read_allocs']).is_a?(Hash)
          self.read_allocs = value
        end
      end

      if attributes.key?(:'requested_capabilities')
        if (value = attributes[:'requested_capabilities']).is_a?(Array)
          self.requested_capabilities = value
        end
      end

      if attributes.key?(:'requested_capacity_max')
        self.requested_capacity_max = attributes[:'requested_capacity_max']
      end

      if attributes.key?(:'requested_capacity_min')
        self.requested_capacity_min = attributes[:'requested_capacity_min']
      end

      if attributes.key?(:'resource_exhausted')
        self.resource_exhausted = attributes[:'resource_exhausted']
      end

      if attributes.key?(:'schedulable')
        self.schedulable = attributes[:'schedulable']
      end

      if attributes.key?(:'secrets')
        if (value = attributes[:'secrets']).is_a?(Hash)
          self.secrets = value
        end
      end

      if attributes.key?(:'snapshot_id')
        self.snapshot_id = attributes[:'snapshot_id']
      end

      if attributes.key?(:'topologies')
        if (value = attributes[:'topologies']).is_a?(Array)
          self.topologies = value
        end
      end

      if attributes.key?(:'write_allocs')
        if (value = attributes[:'write_allocs']).is_a?(Hash)
          self.write_allocs = value
        end
      end
    end

    # Show invalid properties with the reasons. Usually used together with valid?
    # @return Array for valid properties with the reasons
    def list_invalid_properties
      invalid_properties = Array.new
      if !@create_index.nil? && @create_index > 384
        invalid_properties.push('invalid value for "create_index", must be smaller than or equal to 384.')
      end

      if !@create_index.nil? && @create_index < 0
        invalid_properties.push('invalid value for "create_index", must be greater than or equal to 0.')
      end

      if !@modify_index.nil? && @modify_index > 384
        invalid_properties.push('invalid value for "modify_index", must be smaller than or equal to 384.')
      end

      if !@modify_index.nil? && @modify_index < 0
        invalid_properties.push('invalid value for "modify_index", must be greater than or equal to 0.')
      end

      invalid_properties
    end

    # Check to see if the all the properties in the model are valid
    # @return true if the model is valid
    def valid?
      return false if !@create_index.nil? && @create_index > 384
      return false if !@create_index.nil? && @create_index < 0
      return false if !@modify_index.nil? && @modify_index > 384
      return false if !@modify_index.nil? && @modify_index < 0
      true
    end

    # Custom attribute writer method with validation
    # @param [Object] create_index Value to be assigned
    def create_index=(create_index)
      if !create_index.nil? && create_index > 384
        fail ArgumentError, 'invalid value for "create_index", must be smaller than or equal to 384.'
      end

      if !create_index.nil? && create_index < 0
        fail ArgumentError, 'invalid value for "create_index", must be greater than or equal to 0.'
      end

      @create_index = create_index
    end

    # Custom attribute writer method with validation
    # @param [Object] modify_index Value to be assigned
    def modify_index=(modify_index)
      if !modify_index.nil? && modify_index > 384
        fail ArgumentError, 'invalid value for "modify_index", must be smaller than or equal to 384.'
      end

      if !modify_index.nil? && modify_index < 0
        fail ArgumentError, 'invalid value for "modify_index", must be greater than or equal to 0.'
      end

      @modify_index = modify_index
    end

    # Checks equality by comparing each attribute.
    # @param [Object] Object to be compared
    def ==(o)
      return true if self.equal?(o)
      self.class == o.class &&
          access_mode == o.access_mode &&
          allocations == o.allocations &&
          attachment_mode == o.attachment_mode &&
          capacity == o.capacity &&
          clone_id == o.clone_id &&
          context == o.context &&
          controller_required == o.controller_required &&
          controllers_expected == o.controllers_expected &&
          controllers_healthy == o.controllers_healthy &&
          create_index == o.create_index &&
          external_id == o.external_id &&
          id == o.id &&
          modify_index == o.modify_index &&
          mount_options == o.mount_options &&
          name == o.name &&
          namespace == o.namespace &&
          nodes_expected == o.nodes_expected &&
          nodes_healthy == o.nodes_healthy &&
          parameters == o.parameters &&
          plugin_id == o.plugin_id &&
          provider == o.provider &&
          provider_version == o.provider_version &&
          read_allocs == o.read_allocs &&
          requested_capabilities == o.requested_capabilities &&
          requested_capacity_max == o.requested_capacity_max &&
          requested_capacity_min == o.requested_capacity_min &&
          resource_exhausted == o.resource_exhausted &&
          schedulable == o.schedulable &&
          secrets == o.secrets &&
          snapshot_id == o.snapshot_id &&
          topologies == o.topologies &&
          write_allocs == o.write_allocs
    end

    # @see the `==` method
    # @param [Object] Object to be compared
    def eql?(o)
      self == o
    end

    # Calculates hash code according to all attributes.
    # @return [Integer] Hash code
    def hash
      [access_mode, allocations, attachment_mode, capacity, clone_id, context, controller_required, controllers_expected, controllers_healthy, create_index, external_id, id, modify_index, mount_options, name, namespace, nodes_expected, nodes_healthy, parameters, plugin_id, provider, provider_version, read_allocs, requested_capabilities, requested_capacity_max, requested_capacity_min, resource_exhausted, schedulable, secrets, snapshot_id, topologies, write_allocs].hash
    end

    # Builds the object from hash
    # @param [Hash] attributes Model attributes in the form of hash
    # @return [Object] Returns the model itself
    def self.build_from_hash(attributes)
      new.build_from_hash(attributes)
    end

    # Builds the object from hash
    # @param [Hash] attributes Model attributes in the form of hash
    # @return [Object] Returns the model itself
    def build_from_hash(attributes)
      return nil unless attributes.is_a?(Hash)
      self.class.openapi_types.each_pair do |key, type|
        if attributes[self.class.attribute_map[key]].nil? && self.class.openapi_nullable.include?(key)
          self.send("#{key}=", nil)
        elsif type =~ /\AArray<(.*)>/i
          # check to ensure the input is an array given that the attribute
          # is documented as an array but the input is not
          if attributes[self.class.attribute_map[key]].is_a?(Array)
            self.send("#{key}=", attributes[self.class.attribute_map[key]].map { |v| _deserialize($1, v) })
          end
        elsif !attributes[self.class.attribute_map[key]].nil?
          self.send("#{key}=", _deserialize(type, attributes[self.class.attribute_map[key]]))
        end
      end

      self
    end

    # Deserializes the data based on type
    # @param string type Data type
    # @param string value Value to be deserialized
    # @return [Object] Deserialized data
    def _deserialize(type, value)
      case type.to_sym
      when :Time
        Time.parse(value)
      when :Date
        Date.parse(value)
      when :String
        value.to_s
      when :Integer
        value.to_i
      when :Float
        value.to_f
      when :Boolean
        if value.to_s =~ /\A(true|t|yes|y|1)\z/i
          true
        else
          false
        end
      when :Object
        # generic object (usually a Hash), return directly
        value
      when /\AArray<(?<inner_type>.+)>\z/
        inner_type = Regexp.last_match[:inner_type]
        value.map { |v| _deserialize(inner_type, v) }
      when /\AHash<(?<k_type>.+?), (?<v_type>.+)>\z/
        k_type = Regexp.last_match[:k_type]
        v_type = Regexp.last_match[:v_type]
        {}.tap do |hash|
          value.each do |k, v|
            hash[_deserialize(k_type, k)] = _deserialize(v_type, v)
          end
        end
      else # model
        # models (e.g. Pet) or oneOf
        klass = NomadClient.const_get(type)
        klass.respond_to?(:openapi_one_of) ? klass.build(value) : klass.build_from_hash(value)
      end
    end

    # Returns the string representation of the object
    # @return [String] String presentation of the object
    def to_s
      to_hash.to_s
    end

    # to_body is an alias to to_hash (backward compatibility)
    # @return [Hash] Returns the object in the form of hash
    def to_body
      to_hash
    end

    # Returns the object in the form of hash
    # @return [Hash] Returns the object in the form of hash
    def to_hash
      hash = {}
      self.class.attribute_map.each_pair do |attr, param|
        value = self.send(attr)
        if value.nil?
          is_nullable = self.class.openapi_nullable.include?(attr)
          next if !is_nullable || (is_nullable && !instance_variable_defined?(:"@#{attr}"))
        end

        hash[param] = _to_hash(value)
      end
      hash
    end

    # Outputs non-array value in the form of hash
    # For object, use to_hash. Otherwise, just return the value
    # @param [Object] value Any valid value
    # @return [Hash] Returns the value in the form of hash
    def _to_hash(value)
      if value.is_a?(Array)
        value.compact.map { |v| _to_hash(v) }
      elsif value.is_a?(Hash)
        {}.tap do |hash|
          value.each { |k, v| hash[k] = _to_hash(v) }
        end
      elsif value.respond_to? :to_hash
        value.to_hash
      else
        value
      end
    end

  end

end