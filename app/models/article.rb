class Article < ActiveRecord::Base
  attr_accessible :body, :category_id, :title, :photo
  has_attached_file :photo, :styles => { :small => "100x120>", :medium => "250x300>"}
  belongs_to :category
end