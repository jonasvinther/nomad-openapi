=begin
#Nomad

#No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)

The version of the OpenAPI document: 1.1.4
Contact: support@hashicorp.com
Generated by: https://openapi-generator.tech
OpenAPI Generator version: 5.2.0

=end

require 'spec_helper'
require 'json'

# Unit tests for NomadClient::NodesApi
# Automatically generated by openapi-generator (https://openapi-generator.tech)
# Please update as you see appropriate
describe 'NodesApi' do
  before do
    # run before each test
    @api_instance = NomadClient::NodesApi.new
  end

  after do
    # run after each test
  end

  describe 'test an instance of NodesApi' do
    it 'should create an instance of NodesApi' do
      expect(@api_instance).to be_instance_of(NomadClient::NodesApi)
    end
  end

  # unit tests for get_node
  # @param node_id The ID of the node.
  # @param [Hash] opts the optional parameters
  # @option opts [String] :region Filters results based on the specified region.
  # @option opts [String] :namespace Filters results based on the specified namespace.
  # @option opts [Integer] :index If set, wait until query exceeds given index. Must be provided with WaitParam.
  # @option opts [String] :wait Provided with IndexParam to wait for change.
  # @option opts [String] :stale If present, results will include stale reads.
  # @option opts [String] :prefix Constrains results to jobs that start with the defined prefix
  # @option opts [String] :x_nomad_token A Nomad ACL token.
  # @option opts [Integer] :per_page Maximum number of results to return.
  # @option opts [String] :next_token Indicates where to start paging for queries that support pagination.
  # @return [Node]
  describe 'get_node test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for get_node_allocations
  # @param node_id The ID of the node.
  # @param [Hash] opts the optional parameters
  # @option opts [String] :region Filters results based on the specified region.
  # @option opts [String] :namespace Filters results based on the specified namespace.
  # @option opts [Integer] :index If set, wait until query exceeds given index. Must be provided with WaitParam.
  # @option opts [String] :wait Provided with IndexParam to wait for change.
  # @option opts [String] :stale If present, results will include stale reads.
  # @option opts [String] :prefix Constrains results to jobs that start with the defined prefix
  # @option opts [String] :x_nomad_token A Nomad ACL token.
  # @option opts [Integer] :per_page Maximum number of results to return.
  # @option opts [String] :next_token Indicates where to start paging for queries that support pagination.
  # @return [Array<AllocationListStub>]
  describe 'get_node_allocations test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for get_nodes
  # @param [Hash] opts the optional parameters
  # @option opts [String] :region Filters results based on the specified region.
  # @option opts [String] :namespace Filters results based on the specified namespace.
  # @option opts [Integer] :index If set, wait until query exceeds given index. Must be provided with WaitParam.
  # @option opts [String] :wait Provided with IndexParam to wait for change.
  # @option opts [String] :stale If present, results will include stale reads.
  # @option opts [String] :prefix Constrains results to jobs that start with the defined prefix
  # @option opts [String] :x_nomad_token A Nomad ACL token.
  # @option opts [Integer] :per_page Maximum number of results to return.
  # @option opts [String] :next_token Indicates where to start paging for queries that support pagination.
  # @option opts [Boolean] :resources Whether or not to include the NodeResources and ReservedResources fields in the response.
  # @return [Array<NodeListStub>]
  describe 'get_nodes test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for update_node_drain
  # @param node_id The ID of the node.
  # @param node_update_drain_request 
  # @param [Hash] opts the optional parameters
  # @option opts [String] :region Filters results based on the specified region.
  # @option opts [String] :namespace Filters results based on the specified namespace.
  # @option opts [Integer] :index If set, wait until query exceeds given index. Must be provided with WaitParam.
  # @option opts [String] :wait Provided with IndexParam to wait for change.
  # @option opts [String] :stale If present, results will include stale reads.
  # @option opts [String] :prefix Constrains results to jobs that start with the defined prefix
  # @option opts [String] :x_nomad_token A Nomad ACL token.
  # @option opts [Integer] :per_page Maximum number of results to return.
  # @option opts [String] :next_token Indicates where to start paging for queries that support pagination.
  # @return [NodeDrainUpdateResponse]
  describe 'update_node_drain test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for update_node_eligibility
  # @param node_id The ID of the node.
  # @param node_update_eligibility_request 
  # @param [Hash] opts the optional parameters
  # @option opts [String] :region Filters results based on the specified region.
  # @option opts [String] :namespace Filters results based on the specified namespace.
  # @option opts [Integer] :index If set, wait until query exceeds given index. Must be provided with WaitParam.
  # @option opts [String] :wait Provided with IndexParam to wait for change.
  # @option opts [String] :stale If present, results will include stale reads.
  # @option opts [String] :prefix Constrains results to jobs that start with the defined prefix
  # @option opts [String] :x_nomad_token A Nomad ACL token.
  # @option opts [Integer] :per_page Maximum number of results to return.
  # @option opts [String] :next_token Indicates where to start paging for queries that support pagination.
  # @return [NodeEligibilityUpdateResponse]
  describe 'update_node_eligibility test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for update_node_purge
  # @param node_id The ID of the node.
  # @param [Hash] opts the optional parameters
  # @option opts [String] :region Filters results based on the specified region.
  # @option opts [String] :namespace Filters results based on the specified namespace.
  # @option opts [Integer] :index If set, wait until query exceeds given index. Must be provided with WaitParam.
  # @option opts [String] :wait Provided with IndexParam to wait for change.
  # @option opts [String] :stale If present, results will include stale reads.
  # @option opts [String] :prefix Constrains results to jobs that start with the defined prefix
  # @option opts [String] :x_nomad_token A Nomad ACL token.
  # @option opts [Integer] :per_page Maximum number of results to return.
  # @option opts [String] :next_token Indicates where to start paging for queries that support pagination.
  # @return [NodePurgeResponse]
  describe 'update_node_purge test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

end