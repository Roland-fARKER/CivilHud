import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SupabaseService {
  private supabase: SupabaseClient;

  constructor() {
    this.supabase = createClient(environment.supabaseUrl, environment.supabaseKey);
  }

  get client() {
    return this.supabase;
  }

  async getUsers() {
    const { data, error } = await this.supabase.from('users').select('*');
    if (error) throw error;
    return data;
  }

  async addUser(user: { name: string; email: string }) {
    const { data, error } = await this.supabase.from('users').insert(user);
    if (error) throw error;
    return data;
  }
}
