class CreateTeachers < ActiveRecord::Migration[6.1]
  def change
    create_table :teachers do |t|
      t.string :name
      t.string :email
      t.string :password
      
    end
  end
end
