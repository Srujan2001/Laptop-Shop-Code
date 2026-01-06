import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { useItems } from '../../context/ItemContext';
import Header from '../../components/Header';
import styles from './PostItem.module.css';

const PostItem = () => {
  const { currentUser } = useAuth();
  const { addItem, categories } = useItems();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: categories[0] || '',
    quantity: '',
    location: '',
    phone: '',
    image: null,
    imagePreview: null,
    points: 0
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        setError('Image size should be less than 5MB');
        return;
      }

      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData(prev => ({
          ...prev,
          image: reader.result,
          imagePreview: reader.result
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  // Prefill phone if user has one
  React.useEffect(() => {
    if (currentUser?.phone) {
      setFormData(prev => ({ ...prev, phone: currentUser.phone }));
    }
  }, [currentUser]);

  const calculatePoints = (category, quantity) => {
    const basePoints = {
      'Paper': 10,
      'Plastic': 20,
      'Metal': 30,
      'E-waste': 100
    };

    const base = basePoints[category] || 10;
    const qty = parseFloat(quantity) || 0;
    return Math.floor(base * (qty / 10));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    if (!formData.title || !formData.description || !formData.category || !formData.quantity) {
      setError('Please fill in all required fields');
      setLoading(false);
      return;
    }

    try {
      const points = calculatePoints(formData.category, formData.quantity);
      const newItem = {
        userId: currentUser.id,
        userName: currentUser.name,
        userEmail: currentUser.email,
        userPhone: formData.phone || currentUser.phone || '',
        title: formData.title,
        description: formData.description,
        category: formData.category,
        quantity: formData.quantity,
        location: formData.location,
        image: formData.image,
        points: points
      };

      addItem(newItem);
      navigate('/user/dashboard');
    } catch (err) {
      setError(err.message || 'Failed to post item');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.postItem}>
      <Header />
      <main className={styles.main}>
        <div className={styles.card}>
          <h1>Post New Recyclable Item</h1>
          {error && <div className={styles.error}>{error}</div>}
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.formGroup}>
              <label htmlFor="title">Title *</label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                required
                placeholder="e.g., Old Newspapers"
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="description">Description *</label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                required
                rows="4"
                placeholder="Describe your recyclable items..."
              />
            </div>

            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label htmlFor="category">Category *</label>
                <select
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  required
                >
                  {categories.map(cat => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="quantity">Quantity *</label>
                <input
                  type="text"
                  id="quantity"
                  name="quantity"
                  value={formData.quantity}
                  onChange={handleInputChange}
                  required
                  placeholder="e.g., 50 kg, 2 units"
                />
              </div>
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="image">Image (Optional)</label>
              <input
                type="file"
                id="image"
                accept="image/*"
                onChange={handleImageChange}
                className={styles.fileInput}
              />
              {formData.imagePreview && (
                <div className={styles.imagePreview}>
                  <img src={formData.imagePreview} alt="Preview" />
                  <button
                    type="button"
                    onClick={() => setFormData(prev => ({ ...prev, image: null, imagePreview: null }))}
                    className={styles.removeImage}
                  >
                    Remove Image
                  </button>
                </div>
              )}
            </div>

            <div className={styles.pointsPreview}>
              <strong>Estimated Points:</strong> {calculatePoints(formData.category, formData.quantity)}
            </div>

            <button type="submit" disabled={loading} className={styles.submitBtn}>
              {loading ? 'Posting...' : 'Post Item'}
            </button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default PostItem;

