import { Providers } from 'apps/client/redux/provider';
import '../global.css';
import Footer from './components/footer';
import Header from './components/header';

export const metadata = {
  title: 'Welcome to client',
  description: 'Generated by create-nx-workspace',
};

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className="h-screen flex flex-col relative">
        <div id="modal-portal"></div>
        <Header />
        <section className="flex-1 overflow-y-auto">
          <Providers>{children}</Providers>
        </section>
        <Footer />
      </body>
    </html>
  );
}
