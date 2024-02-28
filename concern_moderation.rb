# Le concern de modération
module Moderable
  extend ActiveSupport::Concern

  included do
    after_save :moderate_content
  end

  def moderate_content
    # Appel à l'API de modération
    response = HTTParty.post("https://moderation.logora.fr/predict", body: { text: self.content })
    self.is_accepted = response["probability"] > 0.5
    save
  end
end
