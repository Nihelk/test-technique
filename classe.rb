# Une classe qui souhaite faire appel à la modération de ses attributs
class ModeratedModel < ApplicationRecord
  include Moderable

  # Ajouter la colonne "is_accepted"
  attribute :is_accepted, :boolean
end
