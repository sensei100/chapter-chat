class BooksController < ApplicationController
  
  def index
    books = Book.all
    render json: books
  end

  def show
    book = Book.find(params[:id])
    render json: book
  end

  def create
    book = Book.new(book_params)
    if book.save
      render json: { status: 'ok' }
    else
      render json: 
      { errors: book.errors.full_messages },
      status: :unprocessable_entity
    end
  end

  def update
    book = Book.find(params[:id])
    if book.update(book_params)
      render json: { status: 'ok' }
    else
      render json: 
      { errors: book.errors.full_messages },
      status: :unprocessable_entity
    end
  end

  def destroy
    book = Book.find(params[:id])
    
  end

  private

  def book_params
    params.require(:book).permit(:title, :author)
  end
end