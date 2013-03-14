class HomeController < ApplicationController
  def index
    @articles = Article.order(:title).paginate(:page => params[:page])
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
