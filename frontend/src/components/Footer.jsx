export default function Footer() {
  return (
    <footer style={{
      width: '100%',
      background: '#f3f0f7',
      color: '#6d5c7c',
      padding: '16px 0',
      textAlign: 'center',
      fontSize: '1.1rem',
      marginTop: '32px'
    }}>
      &copy; {new Date().getFullYear()} Kudos Board. All rights reserved.
    </footer>
  );
} 