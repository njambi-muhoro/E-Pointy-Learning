class AddSubtopicToCourses < ActiveRecord::Migration[6.1]
  def change
    add_column :courses, :subtopic, :string
  end
end
