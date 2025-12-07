import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';

export function RsvpForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [guests, setGuests] = useState('1');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // In a real app, this would send the data to a backend
    setTimeout(() => {
      setSubmitted(false);
      setName('');
      setEmail('');
      setGuests('1');
      setMessage('');
    }, 3000);
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 py-16">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center mb-12">
          <h2 className="text-5xl text-purple-600 mb-4">
            RSVP Now! 💌
          </h2>
          <p className="text-2xl text-pink-500">
            We'd love to see you there!
          </p>
        </div>

        {submitted ? (
          <div className="bg-gradient-to-br from-green-100 to-blue-100 rounded-3xl p-12 shadow-xl text-center space-y-4">
            <div className="text-6xl mb-4">🎉</div>
            <h3 className="text-4xl text-green-600">
              Awesome!
            </h3>
            <p className="text-2xl text-gray-700">
              Thanks for RSVPing! See you at the party! 🥳
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-8 shadow-xl space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-xl text-gray-700">
                Your Name *
              </Label>
              <Input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                placeholder="Enter your name"
                className="text-xl rounded-2xl border-2 border-pink-200 focus:border-pink-400 h-14"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-xl text-gray-700">
                Email *
              </Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="your@email.com"
                className="text-xl rounded-2xl border-2 border-pink-200 focus:border-pink-400 h-14"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="guests" className="text-xl text-gray-700">
                Number of Guests
              </Label>
              <Input
                id="guests"
                type="number"
                min="1"
                max="5"
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                className="text-xl rounded-2xl border-2 border-pink-200 focus:border-pink-400 h-14"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message" className="text-xl text-gray-700">
                Special Requests or Dietary Needs
              </Label>
              <Textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Let us know if you have any dietary restrictions..."
                className="text-xl rounded-2xl border-2 border-pink-200 focus:border-pink-400 min-h-28"
              />
            </div>

            <Button 
              type="submit"
              className="w-full text-3xl py-8 rounded-2xl bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 shadow-lg hover:shadow-xl transition-all"
            >
              Count Me In! 🎊
            </Button>
          </form>
        )}

        <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-3xl p-6 shadow-xl text-center">
          <p className="text-xl text-gray-700">
            Questions? Contact us at{' '}
            <a href="mailto:party@email.com" className="text-pink-600 underline">
              party@email.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
