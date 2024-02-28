# test/models/concerns/moderable_test.rb

require 'test_helper'

class ModerableTest < ActiveSupport::TestCase
  setup do
    @moderated_model = ModeratedModel.new(content: "Contenu modéré")
  end

  test "should moderate content using Logora API" do
    # Mocking the API call for testing purposes
    allow(LogoraAPI).to receive(:moderate_content).and_return({ is_accepted: true })

    @moderated_model.save
    assert_equal true, @moderated_model.is_accepted
  end

  test "should reject inappropriate content" do
    # Mocking the API call for testing purposes
    allow(LogoraAPI).to receive(:moderate_content).and_return({ is_accepted: false })

    @moderated_model.save
    assert_equal false, @moderated_model.is_accepted
  end
end
