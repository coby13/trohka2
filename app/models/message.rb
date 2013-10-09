# encoding: UTF-8
class Message < ActiveRecord::Base
  attr_accessible :content, :user_id
  belongs_to :user 
end
