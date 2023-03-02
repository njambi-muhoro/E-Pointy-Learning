class CreateCourses < ActiveRecord::Migration[6.1]
  def change
    create_table :courses do |t|
      t.string :title
      t.string :videos_link
      t.string :teachersname
      t.string :description
      t.string :subtopic
      t.references :teacher, foreign_key: true
      t.references :student, foreign_key: true
    end
  end
end
