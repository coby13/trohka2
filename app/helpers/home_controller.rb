class HomeController < ApplicationController
  def index
    @category = Category.find(1)
    @articles = @category.Articles
    @messages = Message.all
    respond_to do |format|
      format.html # index.html.erb
      format.json { render json: @articles }
    end
  end
  
  def create
    @message = Message.create!(params[:message])
    
  end
end
