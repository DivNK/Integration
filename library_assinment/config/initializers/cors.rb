# Rails.application.config.middleware.insert_before 0, Rack::Cors do
#     allow do
#       origins 'http://example.com:80'
#       resource '*', headers: :any, methods: [:get, :post]
#     end
#   end
# this is general request 
# Rails.application.config.middleware.insert_before 0, Rack::Cors do
#     allow do
#       origins 'http://localhost:3000'
#       resource '*', headers: :any, methods: [:get, :post, :update, :delete, :put]
#     end
#   end

# this is for authentication

Rails.application.config.middleware.insert_before 0, Rack::Cors do
  allow do
    origins 'http://localhost:3000'

    resource '*',
      headers: :any,
      methods: :any,
      credentials: true,
      exposedHeaders: ["set-cookie"]
  end
end
Rails.application.config.action_controller.forgery_protection_origin_check = false