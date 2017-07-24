class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
  #
  # constant & enum
  #

  enum role: %w[general agent admin]

  #
  # validation
  #

  validates :role, presence: true
end
