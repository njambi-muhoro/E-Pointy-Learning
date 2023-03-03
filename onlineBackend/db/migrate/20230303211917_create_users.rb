class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.references :teacher, foreign_key: true
      t.references :student, foreign_key: true
    end
  end
end
