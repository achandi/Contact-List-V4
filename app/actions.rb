# Homepage (Root path)
get '/' do
  erb :index
end

get '/contacts' do
  content_type :json
  Contact.all.to_json
end

post '/contacts' do
  content_type :json
  Contact.create(first_name: params[:first_name], last_name: params[:last_name], email: params[:email], phone_number: params[:phone])
  Contact.all.to_json
end

get '/contacts/search' do
  content_type :json
  contact = Contact.search params[:term]
  contact.to_json
end

get '/contacts/:id' do
  content_type :json
  contact = Contact.find params[:id]
  contact.to_json
end





