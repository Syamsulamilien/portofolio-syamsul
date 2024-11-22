import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, ListGroup } from 'react-bootstrap';

const Comments = () => {
  const [comments, setComments] = useState([]); // State untuk menyimpan komentar
  const [newComment, setNewComment] = useState(''); // State untuk komentar baru
  const [editIndex, setEditIndex] = useState(null); // State untuk menyimpan indeks komentar yang sedang diedit
  const [editComment, setEditComment] = useState(''); // State untuk teks komentar yang sedang diedit

  // Fungsi untuk menambahkan komentar baru
  const handleAddComment = (e) => {
    e.preventDefault(); // Mencegah halaman refresh
    if (newComment.trim()) {
      setComments([...comments, newComment.trim()]);
      setNewComment('');
    }
  };

  // Fungsi untuk menghapus komentar
  const handleDeleteComment = (index) => {
    const updatedComments = comments.filter((_, i) => i !== index);
    setComments(updatedComments);
  };

  // Fungsi untuk menyimpan perubahan saat mengedit
  const handleSaveEdit = (index) => {
    const updatedComments = comments.map((comment, i) =>
      i === index ? editComment : comment
    );
    setComments(updatedComments);
    setEditIndex(null);
    setEditComment('');
  };

  return (
    <Container className="py-5 bg-light">
    <h2 className="text-center mb-4 mt-10">Comments</h2>
    <Row>
      <Col md={8} className="mx-auto" style={{ marginTop: '100px' }}> {/* Tambahkan margin top di sini */}
          <Form onSubmit={handleAddComment}>
            <Form.Group className="mb-3">
              <Form.Label>Add a Comment</Form.Label>
              <Form.Control
                type="text"
                placeholder="Write your comment here..."
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
          <ListGroup className="mt-4">
            {comments.map((comment, index) => (
              <ListGroup.Item key={index} className="d-flex justify-content-between align-items-center">
                {editIndex === index ? (
                  <Form.Control
                    type="text"
                    value={editComment}
                    onChange={(e) => setEditComment(e.target.value)}
                  />
                ) : (
                  <span>{comment}</span>
                )}
                <div>
                  {editIndex === index ? (
                    <Button
                      size="sm"
                      variant="success"
                      className="me-2"
                      onClick={() => handleSaveEdit(index)}
                    >
                      Save
                    </Button>
                  ) : (
                    <Button
                      size="sm"
                      variant="secondary"
                      className="me-2"
                      onClick={() => {
                        setEditIndex(index);
                        setEditComment(comment);
                      }}
                    >
                      Edit
                    </Button>
                  )}
                  <Button
                    size="sm"
                    variant="danger"
                    onClick={() => handleDeleteComment(index)}
                  >
                    Delete
                  </Button>
                </div>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default Comments;
