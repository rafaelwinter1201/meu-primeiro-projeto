import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoImputAddItensComponent } from './todo-imput-add-itens.component';

describe('TodoImputAddItensComponent', () => {
  let component: TodoImputAddItensComponent;
  let fixture: ComponentFixture<TodoImputAddItensComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TodoImputAddItensComponent]
    });
    fixture = TestBed.createComponent(TodoImputAddItensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
