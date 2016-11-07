class Book < ApplicationRecord

  belongs_to :user, optional: true
  belongs_to :club, optional: true
  has_many :posts
  has_many :comments, through: :posts

end
