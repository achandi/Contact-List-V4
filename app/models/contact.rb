class Contact < ActiveRecord::Base

  def self.search(searchTerm)
    # Contact.where(first_name: searchTerm) 
    Contact.where("first_name LIKE ? or last_name LIKE ? or email LIKE ? or phone_number LIKE ?", "%#{searchTerm}%", "%#{searchTerm}%", "%#{searchTerm}%", "%#{searchTerm}%")
  end

end



