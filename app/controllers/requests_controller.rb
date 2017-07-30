# frozen_string_literal: true

class RequestsController < ApplicationController
  before_action :authenticate_user
  before_action :set_request, only: %i[show update destroy]

  def index
    @requests = Request.all

    render json: @requests
  end

  def show
    render json: @request
  end

  def create
    @request =
        Request.new(request_params.merge(user: current_user))

    if @request.save
      render json: @request, status: :created, location: @request
    else
      render json: @request.errors, status: :unprocessable_entity
    end
  end

  def update
    if @request.update(request_params)
      render json: @request
    else
      render json: @request.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @request.destroy
  end

  private

  def set_request
    @request = Request.find(params[:id])
  end

  def request_params
    params.require(:request).permit(:title, :description)
  end
end
