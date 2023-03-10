class Teacher < ActiveRecord::Base
  belongs_to :user
    has_many :courses
    has_many :students, through: :courses
  end