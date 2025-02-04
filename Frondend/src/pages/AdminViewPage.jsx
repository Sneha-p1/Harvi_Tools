{isModalOpen && (
  <div className="fixed inset-0 bg-gray-900/95 backdrop-blur-sm flex items-start justify-center p-4 mt-20">
    <div className="bg-gray-800 p-8 rounded-2xl w-full max-w-2xl border border-gray-700">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">
          Edit Product
        </h2>
        <button
          onClick={() => setIsModalOpen(false)}
          className="text-gray-400 hover:text-white transition-colors"
        >
          ✕
        </button>
      </div>
      <form onSubmit={handleEditSubmit} className="space-y-6">
        <div>
          <label className="block text-gray-300 mb-3 font-medium">
            Product Name
          </label>
          <input
            type="text"
            value={editForm.name}
            onChange={(e) => setEditForm({ ...editForm, name: e.target.value })}
            className="w-full px-4 py-3 bg-gray-700 rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all"
          />
        </div>
        <div>
          <label className="block text-gray-300 mb-3 font-medium">
            Description
          </label>
          <textarea
            value={editForm.description}
            onChange={(e) => setEditForm({ ...editForm, description: e.target.value })}
            className="w-full px-4 py-3 bg-gray-700 rounded-xl h-32 focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all"
          />
        </div>
        <div>
          <label className="block text-gray-300 mb-3 font-medium">
            Update Image
          </label>
          <div className="flex items-center space-x-4">
            <label className="flex-1 cursor-pointer">
              <input
                type="file"
                onChange={handleFileChange}
                className="hidden"
              />
              <div className="w-full px-4 py-3 bg-gray-700 rounded-xl border-2 border-dashed border-gray-600 hover:border-yellow-500 transition-colors group">
                <span className="text-gray-400 group-hover:text-yellow-500">
                  {editForm.image ? editForm.image.name : "Choose new image..."}
                </span>
              </div>
            </label>
          </div>
        </div>
        <div className="flex justify-end space-x-4 mt-10">
          <button
            type="button"
            onClick={() => setIsModalOpen(false)}
            className="px-8 py-3 rounded-xl bg-gray-700 hover:bg-gray-600 transition-colors"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-8 py-3 rounded-xl bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-black font-semibold transition-all"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  </div>
)}
