class AddPrebodyToArticle < ActiveRecord::Migration
  def change
    add_column :articles, :prebody, :text
  end
end
