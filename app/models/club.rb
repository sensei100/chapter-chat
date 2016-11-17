class Club < ApplicationRecord
  has_many :books
  has_many :users
  has_one :current_book
end
